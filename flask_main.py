import requests
from flask import Flask, request,render_template,jsonify,session
from lxml import html
from CreateDatabase import CreateDatabase
from pro_web import get_content_from_web
import csv_data_search
import csv_database_update
from flask_session import Session
import docx
app = Flask(__name__)
app.config['SESSION_TYPE'] = 'filesystem'  # 会话数据存储在文件系统中
Session(app)

instance_class=CreateDatabase()

@app.route('/')
def index():
    return render_template(('3dgraph.html'))  # Load the HTML file as a template
@app.route('/second')
def second():
    return render_template('upload.html')

@app.route('/post_single', methods=['POST'])
def post_single():
    # 获取 JSON 数据
    data = request.json
    if data!={}:
        single_index=data['single']

        data=csv_data_search.seach_function(single_index)
        print(data)
        if data!={}:
            return jsonify({'receivedData': data})
        else:
            raise Exception ("no data found")
    return jsonify({'receivedData': data})
@app.route('/post_multi', methods=['POST'])
def post_multi():

    data = request.json
    if data!={}:
        multi_index_list=data['multi']

        data=csv_data_search.seach_function(multi_index_list)
        session['case_list']=data
        # print(data)
        # if data!={}:
        #     return jsonify({'receivedData': data})
        # else:
        #     raise Exception ("no data found")
    return jsonify({'receivedData': "success"})

@app.route('/post_similarity', methods=['POST'])
def post_similarity():

    data = request.json
    if data!={}:
        multi_index_list=data['simi']

        data=csv_data_search.search_similar(multi_index_list)
        print(data)
        # print(data)
        # if data!={}:
        #     return jsonify({'receivedData': data})
        # else:
        #     raise Exception ("no data found")
    return jsonify({'receivedData': data})
@app.route('/post_del', methods=['POST'])
def post_del():

    data = request.json
    if data!={}:
        multi_index_list=data['del']

        data=csv_database_update.del_data(multi_index_list)
        print("del number: ",data)

        # print(data)
        # if data!={}:
        #     return jsonify({'receivedData': data})
        # else:
        #     raise Exception ("no data found")
    return jsonify({'receivedData': "successful"})
@app.route('/fetch_web', methods=['GET', 'POST'])
def fetch_web():
    xpath_dict={"Case theme":'Short Description','Fields':['AI Applications','AI Techniques'],'Users':'Technology Purveyor','Provider':['System Developer','Technology Purveyor'],'Influencer':'Named Entities','Results':'','Reason':['AI System Description','Harm Distribution Basis','Intent','Harm Type'],'Opinion':'','Attitude':'Severity','Response':'','Description':'Full Description','Place':'Location','Time':'Incident Date','degree of influence':'Severity'}

    data = request.json

    text = data.get('text')
    print(text,"text")
    web_dict=get_content_from_web(text)
    # print(web_dict)
    return_dict={"URL":text}
    for item in xpath_dict:
        if isinstance(xpath_dict[item],list):
            for attribute in xpath_dict[item]:
                try:
                    return_dict[item]=web_dict[attribute]
                    # print(item,return_dict[item])
                    break
                except KeyError:
                    return_dict[item] =''
                    # print('aa')

        else:
            try:
                return_dict[item] = web_dict[xpath_dict[item]]

            except:
                return_dict[item] =''

    # 假设我们简单地将接收到的文本返回
    response = {"reply":return_dict}
    return jsonify(response)
@app.route('/get_case_list', methods=['GET'])
def get_data():


    if "case_list" in session:
        temp_case_list=session['case_list']
        # del session['case_list'] #avoid jet lag
        return jsonify({"receivedData":temp_case_list})
@app.route('/upload_doc', methods=['POST'])
def upload_doc():
    if 'wordfile' not in request.files:
        return jsonify({"error": "No file part"})
    file = request.files['wordfile']
    if file.filename == '':
        return jsonify({"error": "No selected file"})
    if file:
        doc = docx.Document(file)
        fullText = []
        for para in doc.paragraphs:
            fullText.append(para.text)
        return jsonify({"content": "\n".join(fullText)})

@app.route('/iframe_page')
def iframe_page():
    # def iframe_page():
        default_value=""
        param1 = request.args.get('param1', default_value)  # 替换 default_value 为默认值
        param2 = request.args.get('param2', default_value)
        param3 = request.args.get('param3', default_value)

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

    csv_database_update.add_new_data(data)
    instance_class.repeat_one(data)
    print("updated")
    return {'status': 'success', 'message': 'Data received'}

if __name__ == '__main__':
    app.run(debug=True,port=5002)
