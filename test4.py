import numpy as np
from collections import defaultdict
from gensim import corpora, models, similarities


def calculate_combined_similarity(documents, target_index):
    # 获取目标文档的One-Hot向量和文本内容列表
    target = documents[target_index]
    target_one_hot = target["one_hot"]
    target_contents = target["content"]

    # 准备文本相似度计算所需的数据结构
    texts = [" ".join(content).lower() for content in documents[target_index]["content"]]
    frequency = defaultdict(int)

    for text in texts:
        for token in text.split():
            frequency[token] += 1

    texts = [[token for token in text.split() if frequency[token] > 1] for text in texts]
    dictionary = corpora.Dictionary(texts)

    # 计算文本相似度和向量相似度
    combined_sims = []
    for content in target_contents:
        target_doc = " ".join(content)
        target_vec = dictionary.doc2bow(target_doc.lower().split())

        # 计算文本相似度
        corpus = [dictionary.doc2bow(text) for text in texts]
        tfidf = models.TfidfModel(corpus)
        corpus_tfidf = tfidf[corpus]
        index = similarities.MatrixSimilarity(corpus_tfidf)
        target_vec_tfidf = tfidf[target_vec]
        text_sims = index[target_vec_tfidf]

        # 计算向量相似度
        def vectorize(text):
            vector = np.array([int(i) for i in text])
            return vector

        document_vectors = [vectorize(document["one_hot"]) for document in documents]
        target_vector = vectorize(target_one_hot)

        dot_product = np.dot(document_vectors, target_vector)
        norm_documents = np.linalg.norm(document_vectors, axis=1)
        norm_target = np.linalg.norm(target_vector)

        # 计算文本相似度和向量相似度之和
        combined_sim = sum([text_sim + np.dot(doc_vector, target_vector) / (norm_document * norm_target)
                            for text_sim, doc_vector, norm_document in
                            zip(text_sims, document_vectors, norm_documents)])

        combined_sims.append(combined_sim)

    # 移除目标文档自身的相似度
    combined_sims.pop(target_index)

    # 构建带有相似度的结果字典列表
    result_documents = [{"index": i, "content": documents[i]["content"], "similarity": sim}
                        for i, sim in enumerate(combined_sims)]

    return result_documents


# 示例用法
documents = [
    {"index": 0, "one_hot": ["0", "1"], "content": [["This is the first document.", "Another content."]]},
    {"index": 1, "one_hot": ["1", "0"], "content": [["This document is the second document.", "Different content."]]},
    {"index": 2, "one_hot": ["1", "1"], "content": [["And this is the third one.", "Yet another content."]]},
    {"index": 3, "one_hot": ["0", "0"], "content": [["Is this the first document?", "Similar content."]]}
]

target_index = 0

result_documents = calculate_combined_similarity(documents, target_index)
print(f"与目标文档 {target_index} 的相似度（向量相似度 + 文本相似度）:")
for document in result_documents:
    print(f"文档 {document['index']}: {document['similarity']:.4f} ({document['content']})")
