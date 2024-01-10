from flask import Flask, request, render_template_string
import json
from CreateDatabase import CreateDatabase
app = Flask(__name__)
instance_class=CreateDatabase()
@app.route('/')
def index():
    return render_template_string(open('upload.html').read())  # Load the HTML file as a template

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
    instance_class.repeat_one(data)
    return {'status': 'success', 'message': 'Data received'}

if __name__ == '__main__':
    app.run(debug=True,port=5001)
