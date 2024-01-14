import os
from PyInstaller.__main__ import run

if __name__ == '__main__':
    # 获取当前脚本所在目录
    script_dir = os.path.dirname(os.path.abspath('__main__'))

    params = [
        '--name=myapp',  # 打包后的程序名称
        '--onefile',  # 打包成单个可执行文件
        '--console',  # 控制台程序
        os.path.join(script_dir, r'C:\Users\Morning\Desktop\hiwi\3dplot\3dgraph\flask_main.py'),  # 要打包的Python文件路径
        '--hidden-import=pandas',
        '--hidden-import=numpy',

    ]

    run(params)
