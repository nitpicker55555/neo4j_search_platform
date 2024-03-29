import csv
import re,os
from sqlalchemy import create_engine, Column, Integer, String, MetaData
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import sqlalchemy
# 清洗列名，确保它们是有效的 Python 变量名
def clean_column_name(column_name):
    # column_name = re.sub(r'[^a-zA-Z0-9_]', '', column_name)  # 移除不合法字符
    column_name = re.sub(r'(^\d|\s+)', '_', column_name)  # 数字开头或空格的地方用下划线替换
    return column_name

# 动态创建模型类
def create_dynamic_class(class_name, columns):
    attributes = {'__tablename__': class_name.lower()}
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
        columns = [clean_column_name(col) for col in original_columns if col]
    return columns

# 定义基础模型
Base = sqlalchemy.orm.declarative_base()

# 连接数据库
engine = create_engine('sqlite:///cases.db')
Base.metadata.bind = engine

# 读取 CSV 文件
csv_file = r"static\cases.csv"
columns = get_columns_from_csv(csv_file)
class_name = os.path.basename(csv_file).split('.')[0].capitalize()
DynamicModel = create_dynamic_class(class_name, columns)

# 创建表（如果它尚不存在）
Base.metadata.create_all(engine)

# 创建 session
Session = sessionmaker(bind=engine)
session = Session()

# 读取 CSV 文件并存入数据库
with open(csv_file, 'r', encoding='utf-8-sig') as file:
    csv_reader = csv.DictReader(file)
    for row in csv_reader:
        filtered_row = {clean_column_name(k): v for k, v in row.items() if k}
        record = DynamicModel(**filtered_row)
        session.add(record)

session.commit()
