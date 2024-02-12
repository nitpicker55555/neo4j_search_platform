from transformers import pipeline

qa_model = pipeline("question-answering", "timpal0l/mdeberta-v3-base-squad2")
question = "Where do I live?"
context = "My name is Tim and I live in Sweden. I don't like ice scream"
answer=qa_model(question = question, context = context)

