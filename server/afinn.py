#!/usr/bin/python3

#Some AFINN helper functions/variables 
#for use in other scripts.
#Keep in same folder as AFINN-111.txt

import re
punctuation = re.compile(r'[^0-9a-zA-Z]+')#(r'[^\w\s]')

#Read AFINN-111 into dict
with open("AFINN-111.txt") as f:
    afinn_111 = dict()
    for line in f:
        word, score = line.split('\t')
        afinn_111[word] = float(score)

#Takes string(one word) or list(tokenized sentence)
def sentiment(words):
    if type(words) == str:
        words = words.strip().lower()
        try:
            return afinn_111[words]
        except KeyError:
            return None

    elif type(words) == list:
        sentiments = list()
        for word in words:
            s = sentiment(word)
            if s != None:
                sentiments.append(s)
        return sum(sentiments)

#Simple tokenizer
def tokenize(string):
    arr = string.split()#word_tokenize(string)
    arr = [punctuation.sub("", word) for word in arr]
    arr = list(filter(None, arr))
    return arr