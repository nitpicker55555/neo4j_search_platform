from flask import Flask, request, render_template_string,render_template,jsonify
import json
import csv,os
from CreateDatabase import CreateDatabase
import csv_data_search
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

@app.route('/receive-data', methods=['POST'])
def receive_data():
    # 获取 JSON 数据
    data = request.json
    single_index=data['single']
    data=[csv_data_search.seach_function(single_index)]
    # 这里可以处理数据，例如保存到数据库等
    # ...

    # 返回接收到的数据作为确认

    return jsonify({'receivedData': data})

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



    print("finish")
    instance_class.repeat_one(data)
    return {'status': 'success', 'message': 'Data received'}

if __name__ == '__main__':
    app.run(debug=True,port=5001)
