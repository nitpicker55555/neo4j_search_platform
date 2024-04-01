
import numpy as np
from collections import defaultdict
from gensim import corpora, models, similarities
from gensim.parsing.preprocessing import preprocess_string
def calculate_combined_similarity(documents, target,weights):
    # print(len(documents),len(target))
    # print("target",target)
    def simi_text(text1, text2):

        texts = [(text1.lower().split()), (text2.lower().split())]
        try:
            # 创建字典
            dictionary = corpora.Dictionary(texts)

            # 将文本转换成词袋模型
            corpus = [dictionary.doc2bow(text) for text in texts]

            # 使用词袋模型创建TF-IDF模型
            tfidf = models.TfidfModel(corpus)

            # 将文本转换为TF-IDF向量
            corpus_tfidf = tfidf[corpus]

            # 使用Matrix Similarity计算相似度
            index = similarities.MatrixSimilarity(corpus_tfidf)
            sims = index[corpus_tfidf]
        except:
            return 0 #没有相似度
        return (sims[0][1])
    target_index = target['Index']
    target_one_hot = target["one_hot"]
    target_contents = target["content"]
    # 准备文本相似度计算所需的数据结构

    text_simi_dict=[]
    for document in documents:
        # print(document['content'],"document['content']")
        for key,text in document['content'].items():
            simi_result=simi_text(text,target_contents[key])*weights[key.replace('_',' ')]
            text_simi_dict.append(simi_result)


    # 计算向量相似度


    document_vectors = [((document["one_hot"])) for document in documents]
    print(len(document_vectors))
    target_vector = (target_one_hot)

    dot_product = np.dot(document_vectors, target_vector)
    norm_documents = np.linalg.norm(document_vectors, axis=1)
    norm_target = np.linalg.norm(target_vector)


    # combined_sims = [(  np.dot(doc_vector, target_vector) / (norm_document * norm_target))
    #                  for text_sim, doc_vector, norm_document in zip(text_simi_dict, document_vectors, norm_documents)]
    combined_sims = []
    for text_sim, doc_vector, norm_document in zip(text_simi_dict, document_vectors, norm_documents):
        # 检查分母不为零
        if norm_document != 0 and norm_target != 0:
            # 计算点乘部分
            dot_product = np.dot(doc_vector, target_vector)
            # 计算分母部分
            denominator = norm_document * norm_target

            # 检查分母是否有效且不为零
            if denominator > 0 and not np.isnan(denominator):
                # 计算余弦相似度部分
                cos_sim = dot_product / denominator
                # 检查余弦相似度是否为有效数值
                if not np.isnan(cos_sim):
                    combined_sim = text_sim + cos_sim
                else:
                    combined_sim = text_sim  # 或处理为你认为合适的值
            else:
                combined_sim = text_sim  # 分母无效或为零时的处理
        else:
            combined_sim = text_sim  # 分母为零时的处理

        combined_sims.append(combined_sim)

    # 构建带有相似度的结果字典列表
    result_documents = [{"Index": str(i), "content": documents[i]["content"], "similarity": sim}
                        for i, sim in enumerate(combined_sims)]

    # 按相似度排序
    details_dict={}
    sorted_result_documents = sorted(result_documents, key=lambda x: x["similarity"], reverse=True)

    # 提取排名前五的文档索引，包括自己
    result_index = [doc['Index'] for doc in sorted_result_documents[:6]]
    for i in sorted_result_documents[1:6]:

        details_dict[i['Index']]=i['similarity']
    print(details_dict)
    return result_index,details_dict

# def add_weights(vector,weights):
#     def vectorize(text):
#         return np.array([int(i) for i in text])
#     # a=["0", "1", "0", "1", "0", "1"]
#     v_a=vectorize(vector)
#     results_a=[]
#     # weights=vectorize(["1", "2", "0", "13", "0", "1"])
#     for num,i in enumerate(v_a):
#         results_a.append(weights[num]*i)
#     return results_a

# function_test()
# documents = [
# {"Index": "0", "one_hot": ["0", "1", "0", "1", "0", "1"], "content": ["This is the first document.", "Another sentence.","Another sentence."]},
# {"Index": "1", "one_hot": ["1", "0", "0", "1", "0", "1"], "content": ["This document is the second document.", "Yet another text.","Another sentence."]},
# {"Index": "2", "one_hot": ["1", "1", "0", "1", "0", "1"], "content": ["And this is the third one.", "More texts here.","Another sentence."]},
# {"Index": "3", "one_hot": ["0", "0", "0", "1", "0", "1"], "content": ["Is this the first document?", "Similar content.","Another sentence."]},
# {"Index": "4", "one_hot": ["0", "0", "0", "1", "0", "1"], "content": ["Is this the first document?", "Different content.","Another sentence."]},
# {"Index": "5", "one_hot": ["0", "0", "0", "1", "0", "1"], "content": ["Is this the first document?", "Another different content.","Another sentence."]},
# {"Index": "6", "one_hot": ["0", "0", "0", "1", "0", "1"], "content": ["Is this the first document?", "Yet another different content.","Another sentence."]}
# ]
#
# target = documents[1]
#
# result_index = calculate_combined_similarity(documents, target)
# print(result_index)
