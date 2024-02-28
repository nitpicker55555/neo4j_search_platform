import re
from collections import Counter
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import sent_tokenize, word_tokenize
import spacy

nltk.download('punkt')
nltk.download('stopwords')
def location_time_extract(text):

    # 加载spaCy模型
    nlp = spacy.load('en_core_web_md')

    def extract_locations_and_times(text):
        # 使用spaCy处理文本
        doc = nlp(text)

        # 抽取地名和时间
        locations = set(ent.text for ent in doc.ents if ent.label_ == 'GPE')
        times =  set(ent.text for ent in doc.ents if ent.label_ in ['DATE', 'TIME'])
        location_combine=",".join(locations)
        time_combine=",".join(times)
        return location_combine, time_combine

    # 示例文本
    # text = "I visited on January 1st. I'll be in next week."

    # 调用函数
    locations, times = extract_locations_and_times(text)

    return locations,times
    # print("Locations:", locations)
    # print("Times:", times)

def summary_extract(text):


    def summarize_text(text, summary_length=3):
        sentences = sent_tokenize(text)
        words = word_tokenize(text.lower())

        # 移除停用词和标点
        stop_words = set(stopwords.words('english'))
        words_filtered = [word for word in words if word.isalnum() and word not in stop_words]

        # 计算词频
        word_frequencies = Counter(words_filtered)

        # 计算句子得分
        sentence_scores = {}
        for sentence in sentences:
            for word in word_tokenize(sentence.lower()):
                if word in word_frequencies:
                    if sentence not in sentence_scores:
                        sentence_scores[sentence] = word_frequencies[word]
                    else:
                        sentence_scores[sentence] += word_frequencies[word]

        # 选择得分最高的几个句子
        summarized_sentences = sorted(sentence_scores, key=sentence_scores.get, reverse=True)[:summary_length]

        return ' '.join(summarized_sentences)

    # 示例文本
    # text = """
    # Artificial intelligence (AI) is a wide-ranging tool that enables people to rethink how we integrate information, analyze data, and use the resulting insights to improve decision making. Our generation is experiencing the most profound era of transformation due to AI innovation. This is akin to the transformation that occurred in the Industrial Revolution.
    # """

    # 总结文本
    summary = summarize_text(text, summary_length=2)
    return (summary)
def entites_extract(text):

    # 加载spaCy模型
    nlp = spacy.load('en_core_web_md')

    def extract_company_names(text):
        # 使用spaCy处理文本
        doc = nlp(text)

        # 提取公司名称
        companies_set = set(ent.text for ent in doc.ents if ent.label_ == 'ORG')
        companies_combine = ",".join(companies_set)

        return companies_combine

    # 示例文本
    # text = "Google and Microsoft are leading the race in artificial intelligence. Other notable companies include Apple and Amazon, which are also investing heavily in this area."

    # 提取公司名称
    company_names = extract_company_names(text)
    return company_names
    # print("Company Names:", company_names)


# entites_extract()
# print(location_time_extract(""))