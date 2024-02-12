# url='https://incidentdatabase.ai/cite/19/'
import requests
from lxml import etree


def get_content_from_web(url):
# 使用requests获取网页内容
    response = requests.get(url)
    # 确保请求成功
    response.raise_for_status()

    # 使用lxml解析网页
    html = etree.HTML(response.text)
    # print(response.text)
    # 初始化一个空字典来存放爬取的数据
    data = {}

    # 假设我们不知道页面中有多少个这样的元素，所以尝试从1开始循环直到找不到更多元素
    num = 2
    while True:
        # 构造标题和内容的XPath
        title_xpath = f'//*[@id="taxonomy-CSETv0"]/div[{num}]/div[1]/div[1]/p'
        content_xpath = f'//*[@id="taxonomy-CSETv0"]/div[{num}]/div[2]/p'
        # 尝试获取标题和内容
        title = html.xpath(title_xpath + '/text()')
        content = html.xpath(content_xpath + '/text()')
        # 检查是否找到了标题和内容
        if title and content:
            # 如果找到了，就添加到字典中
            data[title[0]] = content[0]


        else:
            # 如果没有找到，假设我们已经到了页面的末尾，退出循环
            break

        # 准备查找下一个元素
        num += 1
    num=1
    while True:
        # 构造标题和内容的XPath
        title_xpath = f'//*[@id="content"]/div/div/div[2]/div[1]/div[3]/div/div[2]/div/div/div/div/div/div[2]/div[{num}]'
        content_xpath = f'//*[@id="content"]/div/div/div[2]/div[1]/div[3]/div/div[2]/div/div/div/div/div/div[2]/div[{num+1}]'

        # print(title_xpath)
        # 尝试获取标题和内容
        title = html.xpath(title_xpath + '/text()')
        content = html.xpath(content_xpath + '/text()')
        # 检查是否找到了标题和内容
        if title and content:
            data[title[0]] = content[0]

        else:
            # 如果没有找到，假设我们已经到了页面的末尾，退出循环
            break

        # 准备查找下一个元素
        num += 2
    return data
