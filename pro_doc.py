from flask import Flask, request, render_template
import os
from docx import Document

app = Flask(__name__)

# 设置上传文件夹
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# 确保上传文件夹存在
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/')
def index():
    return render_template('upload_doc.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return '没有文件部分'
    file = request.files['file']
    if file.filename == '':
        return '没有选中文件'
    if file and file.filename.endswith('.docx'):
        filename = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        file.save(filename)
        return extract_text_from_docx(filename)
    else:
        return '不支持的文件类型'

def extract_text_from_docx(docx_path):
    doc = Document(docx_path)
    text = ""
    for num,para in enumerate(doc.paragraphs):
        if para.style.name == 'Heading 1':
            text += f"\n{num}\n"
        else:
            text += f"      {para.text}\n"
    return text

if __name__ == '__main__':
    app.run(debug=True)
