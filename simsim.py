from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template('index.html')  # 假设你有一个 index.html

def some_function():
    # 假设这个函数在某个时刻被触发，并发送数据到客户端
    socketio.emit('my message', {'data': 'This is a message from Flask!'})
for i in range(12):
    some_function()
if __name__ == '__main__':
    socketio.run(app, allow_unsafe_werkzeug=True ,debug=True,port=5002)
