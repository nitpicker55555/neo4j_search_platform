
import numpy as np
from collections import defaultdict
from gensim import corpora, models, similarities

def calculate_combined_similarity(documents, target):
    target_index = target['Index']
    target_one_hot = target["one_hot"]
    target_contents = target["content"]

    # 准备文本相似度计算所需的数据结构
    all_texts = [text for document in documents for text in document["content"]]
    frequency = defaultdict(int)

    for text in all_texts:
        for token in text.lower().split():
            frequency[token] += 1

    # 过滤掉低频词
    texts_filtered = [[token for token in text.lower().split() if frequency[token] > 1] for text in all_texts]
    dictionary = corpora.Dictionary(texts_filtered)

    # 对每个文档的每个文本计算TF-IDF
    corpus = [dictionary.doc2bow(text.lower().split()) for text in all_texts]
    tfidf = models.TfidfModel(corpus)
    corpus_tfidf = tfidf[corpus]
    index = similarities.MatrixSimilarity(corpus_tfidf)

    # 计算目标文档与所有文档的文本相似度
    def calculate_text_similarity(target_texts):
        target_sims = []
        for target_text in target_texts:
            target_vec = dictionary.doc2bow(target_text.lower().split())
            target_vec_tfidf = tfidf[target_vec]
            sims = index[target_vec_tfidf]
            target_sims.append(sims)
        return np.sum(target_sims, axis=0)

    text_sims = calculate_text_similarity(target_contents)

    # 计算向量相似度
    def vectorize(text):
        return np.array([int(i) for i in text])

    document_vectors = [vectorize(document["one_hot"]) for document in documents]
    target_vector = vectorize(target_one_hot)

    dot_product = np.dot(document_vectors, target_vector)
    norm_documents = np.linalg.norm(document_vectors, axis=1)
    norm_target = np.linalg.norm(target_vector)

    combined_sims = [(text_sim + np.dot(doc_vector, target_vector) / (norm_document * norm_target))
                     for text_sim, doc_vector, norm_document in zip(text_sims, document_vectors, norm_documents)]

    # 构建带有相似度的结果字典列表
    result_documents = [{"Index": str(i), "content": documents[i]["content"], "similarity": sim}
                        for i, sim in enumerate(combined_sims) if str(i) != target_index]

    # 按相似度排序
    sorted_result_documents = sorted(result_documents, key=lambda x: x["similarity"], reverse=True)

    # 提取排名前五的文档索引
    result_index = [doc['Index'] for doc in sorted_result_documents[:5]]
    return result_index


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
