def mergeAlternately(word1, word2):
    l1 = len(word1)
    l2 = len(word2)
    l = l1 if l1 >= l2 else l2

    new_string = ''
    for i in range(l):
        if i < l1:
            char1 = word1[i]
        else:
            char1 = ''
        
        if i < l2:
            char2 = word2[i]
        else:
            char2 = ''
        
        new_string += char1 + char2

    return new_string