def isAnagram(s, t):
    sortedS = ''.join(sorted(s))
    sortedT = ''.join(sorted(t))
    return sortedS == sortedT