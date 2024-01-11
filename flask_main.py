from flask import Flask, request, render_template_string,render_template
import json
import csv,os
from CreateDatabase import CreateDatabase
app = Flask(__name__)
instance_class=CreateDatabase()
file_path = 'static/KG_cases_labeled.csv'  # 替换为你的文件路径
if os.path.exists(file_path):
    print(f"The path '{file_path}' exists.")
else:
    print(f"The path '{file_path}' does not exist.")
@app.route('/')
def index():
    return render_template(('3dgraph.html'))  # Load the HTML file as a template
@app.route('/second')
def second():
    return render_template('upload.html')
@app.route('/iframe_page')
def iframe_page():
    # def iframe_page():
        default_value=""
        param1 = request.args.get('param1', default_value)  # 替换 default_value 为默认值
        param2 = request.args.get('param2', default_value)
        param3 = request.args.get('param3', default_value)
        # 处理这些参数...
        return render_template('paralle.html', param1=param1, param2=param2,param3=param3)
@app.route('/submit', methods=['POST'])
def submit():
    data = request.json  # Get JSON data sent from the front-end

    print(data)  # For demonstration purposes, just print the data
    print(data.values())
    for i in data:
        if data[i]=="true":
            data[i]="1"
        elif data[i]=='false':
            data[i]="0"
        elif i=="Index":
            data[i]=int(data[i])


    # 使用os.path.exists检查路径是否存在

    # with open('static/KG_cases_labeled.csv', 'a', newline='', encoding='utf-8') as csvfile:
    #     # 读取列名
    #     reader = csv.DictReader(csvfile)
    #     fieldnames = reader.fieldnames
    #
    # # 再次打开CSV文件以追加数据
    # with open('static/KG_cases_labeled.csv', 'a', newline='', encoding='utf-8') as csvfile:
    #     filtered_dict = {k: data[k] for k in fieldnames if k in data}
    #     print(filtered_dict)
    #     # 创建DictWriter对象
    #     writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    #
    #     # 写入新的字典作为一行
    #     writer.writerow(filtered_dict)
    print("finish")
    instance_class.repeat_one(data)
    return {'status': 'success', 'message': 'Data received'}

if __name__ == '__main__':
    app.run(debug=True,port=5001)
