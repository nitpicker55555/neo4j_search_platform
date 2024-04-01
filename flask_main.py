import os

import requests
from flask import Flask, request,render_template,jsonify,session,Response
from lxml import html
from CreateDatabase import CreateDatabase
from pro_web import get_content_from_web
import csv_data_search
import csv_database_update
from flask_session import Session
import text_process
from flask_socketio import SocketIO, emit
import docx
import pandas as pd
app = Flask(__name__)
app.config['SESSION_TYPE'] = 'filesystem'  # 会话数据存储在文件系统中
Session(app)

instance_class=CreateDatabase()
inital_weights= {'weights': {'Case theme': 1, 'Fields': 1, 'Users': 1, 'Provider': 1, 'Influencer': 1, 'Results': 1, 'Reason': 1, 'Positionalattribute': 1, 'Opinion': 1, 'Attitude': 1, 'Response': 1, 'Description': 1, 'Place': 1, 'degree of influence': 1, 'Data acquisition': 1, 'Data access': 1, 'Data modeling': 1, 'Behavior tracking': 1, 'Behavior prediction': 1, 'Behaviour nudging': 1, 'Wrong user group': 1, 'Wrong user task': 1, 'Surprising learning result': 1, 'Positive design that produces negative results that do not meet expectations': 1, 'Negative design that produces negative results that meet expectations': 1, 'Overly human-like and leading to ethics problems': 1, 'Not human-like enough to cause ethics problems': 1, 'Not enough beyond human to cause ethics problems': 1, 'ethics issues caused by the wrong user group': 1, 'ethics issues due to wrong user tasks': 1, 'Infringements on human rights': 1, 'Social detriment': 1, 'Emotional or psychological injury': 1, 'Loss of opportunity': 1, 'Physical injury': 1, 'Economic loss': 1, 'Transparency': 1, 'Justice and fairness': 1, 'Privacy': 1, 'Trust': 1, 'Non-maleficence': 1, 'Responsibility': 1}}

@app.route('/')
def index():
    return render_template(('3dgraph.html'))  # Load the HTML file as a template
@app.route('/second')
def second():
    return render_template('upload.html')
@app.route('/graph_compare')
def graph_compare():
    return render_template('graph_compare.html')

@app.route('/post_single', methods=['POST'])
def post_single():
    # 获取 JSON 数据
    data = request.json
    if data!={}:
        single_index=data['single']

        data=csv_data_search.search_function(single_index)
        print(data)
        if data!={}:
            return jsonify({'receivedData': data})
        else:
            raise Exception ("no data found")
    return jsonify({'receivedData': data})
@app.route('/post_level')
def post_level():

    xlsx_file_path = os.path.join(app.static_folder, 'route.xlsx')
    if not os.path.isfile(xlsx_file_path):
        return 'xlsx_file_path not exist'
    df = pd.read_excel(xlsx_file_path, header=None)  # Load without headers to get all data as is
    # Since we're only interested in the first two rows, we'll extract those
    keys = df.iloc[0]  # First row for keys
    values = df.iloc[1]  # Second row for values
    data_dict = dict(zip(keys, values))
    return jsonify({'reply': data_dict})


@app.route('/post_multi', methods=['POST'])
def post_multi():

    data = request.json
    if data!={}:
        multi_index_list=data['multi']

        data=csv_data_search.search_function(multi_index_list)
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
        # multi_index_list=data['simi']
        weights = data['weights']
        session['weights']=weights

        print(data,'post_similarity')
        # print(data)
        # if data!={}:
        #     return jsonify({'receivedData': data})
        # else:
        #     raise Exception ("no data found")
    return jsonify({'receivedData': data})
@app.route('/cal_similarity', methods=['POST'])
def cal_similarity():

    data = request.json
    details_dict={}
    if data!={}:
        multi_index_list=data['multi_index_list']
        try:
            weights=session['weights']
        except:
            weights=inital_weights
        print(data,'cal_similarity',multi_index_list)
        data,details_dict=csv_data_search.search_similar(multi_index_list,weights)

    return jsonify({'receivedData': data,'details':str(details_dict)})
@app.route('/get_cache', methods=['POST'])
def get_cache():


    if 'weights' in session:
        weights=session['weights']
    else:
        weights=inital_weights

    return jsonify({'receivedData': weights})

@app.route('/render_similarity')
def render_similarity():
    return render_template('similarity.html')  # Load the HTML file as a template

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
        return jsonify({"reply": "\n".join(fullText)})
def generate_messages():
    # 示例：发送一个简单的消息
    yield "data: Hello, world!\n\n"

@app.route('/events')
def sse_request():
    return Response(generate_messages(), mimetype='text/event-stream')
@app.route('/process_text', methods=['POST'])
def process_text():
    data = request.json

    allText = data.get('text')
    form_dict={"Case theme":'','Users':'','Provider':'','Influencer':'','Description':'','Time':'','Place':'','URL':''}
    if allText:

        form_dict["Case theme"]=text_process.summary_extract(allText)
        form_dict["Description"]=form_dict["Case theme"]
        form_dict["Users"]=text_process.entites_extract(allText)
        form_dict["Provider"]=form_dict["Users"]
        form_dict["Influencer"]=form_dict["Users"]
        form_dict["Place"],form_dict["Time"]=text_process.location_time_extract(allText)


        return jsonify({"reply":form_dict})

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
