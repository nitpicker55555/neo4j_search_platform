import csv
import re,os
from sqlalchemy import create_engine, Column, Integer, String, MetaData
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import sqlalchemy
from cos_sim import calculate_combined_similarity

def clean_column_name(column_name):
    # column_name = re.sub(r'[^a-zA-Z0-9_]', '', column_name)  # 移除不合法字符
    column_name = re.sub(r'(^\d|\s+)', '_', column_name)  # 数字开头或空格的地方用下划线替换
    return column_name

# 动态创建模型类
def create_dynamic_class(class_name, columns):
    attributes = {'__tablename__': "cases"}
    for column in columns:
        cleaned_column = clean_column_name(column)
        if cleaned_column == 'Index':
            attributes[cleaned_column] = Column(Integer, primary_key=True)
        else:
            attributes[cleaned_column] = Column(String)
    return type(class_name, (Base,), attributes)

# 获取并清洗列名
def get_columns_from_csv(csv_file):
    with open(csv_file, 'r', encoding='utf-8-sig') as file:
        reader = csv.reader(file)
        original_columns = next(reader)
        print(original_columns)
        columns = [clean_column_name(col) for col in original_columns if col]
    return columns

# 定义基础模型
Base = sqlalchemy.orm.declarative_base()

# 连接数据库
engine = create_engine('sqlite:///static/cases.db')
Base.metadata.bind = engine

# 读取 CSV 文件
csv_file = r".\static\cases.csv"
columns = get_columns_from_csv(csv_file)
class_name = os.path.basename(csv_file).split('.')[0].capitalize()
# print(class_name)
# print(columns)
DynamicModel = create_dynamic_class(class_name, columns)

# 创建表（如果它尚不存在）
Base.metadata.create_all(engine)

# 创建 session
Session = sessionmaker(bind=engine)
session = Session()

# 查询主键为12的记录
def search_function(index_list):
    return_list=[]

    for i in index_list:
        record = session.query(DynamicModel).filter_by(Index=i).first()
        if record:
            # 将查询结果转换为字典
            record_dict = {key: value for key, value in record.__dict__.items() if not key.startswith('_')}
            return_list.append(record_dict)
            # print(f"Found record: {record_dict}")

        else:
            print("No record found with Index",i)
    return return_list
# return_list=seach_function([1])
def search_similar(target_index,weights):
    # print(target_index)
    query = session.query(DynamicModel)
    results = query.all()
    # 将结果转换为字典列表
    all_dicts=[]
    for each_case in results:
        all_dicts .append( {key: value for key, value in each_case.__dict__.items() if not key.startswith('_')})
    # print(all_dicts[0])
    # print(len(all_dicts))
    similar_index_list=[]
    analyse_dict_list=[]
    boolean_header=[ 'Data_acquisition', 'Data_access', 'Data_modeling', 'Behavior_tracking', 'Behavior_prediction', 'Behaviour_nudging', 'Wrong_user_group', 'Wrong_user_task', 'Surprising_learning_result', 'Positive design that produces negative results that do not meet expectations', 'Negative design that produces negative results that meet expectations', 'Overly human-like and leading to ethics problems', 'Not human-like enough to cause ethics problems', 'Not enough beyond human to cause ethics problems', 'ethics issues caused by the wrong user group', 'ethics issues due to wrong user tasks', 'Infringements on human rights', 'Social detriment', 'Emotional or psychological injury', 'Loss of opportunity', 'Physical injury', 'Economic loss', 'Transparency', 'Justice and fairness', 'Privacy', 'Trust', 'Non-maleficence', 'Responsibility']
    #
    target_list=[]



    for each_case in all_dicts:
        need_dict={"one_hot":[],"content":{},"Index":0}

        for header in each_case:
            if header in boolean_header:
                weight=weights[header.replace('_',' ')]

                need_dict["one_hot"].append(int(each_case[header])*weight)#weights[header]加权

                need_dict["one_hot"].append(0)
            elif header=="Index":
                need_dict['Index']=each_case[header]
            else:
                if header!="degree of influence" and header!="URL" and header!="Time":
                    need_dict['content'][header]=each_case[header]
        if str( each_case['Index']) in target_index:
            target_list.append(need_dict)  # 目标case
            # print(need_dict)
        analyse_dict_list.append(need_dict) # 所有case
    # print(len(analyse_dict_list))
    for each_target in target_list:
        # print(each_target)

        similar_index_list.extend(calculate_combined_similarity(analyse_dict_list,each_target,weights))
    # print("similar_index_list: ",tuple(similar_index_list))
    return list(tuple(similar_index_list))

# search_similar(["24"])
# 关闭 session
# session.close()
