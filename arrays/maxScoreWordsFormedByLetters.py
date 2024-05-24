def maxScoreWords(words, letters, score):
        max_score = 0
        letter_scores = {chr(ord('a') + i):score[i] for i in range(26)}
        letter_count = {}
        for char in letters:
            letter_count[char] = letter_count.get(char, 0) + 1
        
        word_scores = list()

        for word in words:
            curr_score = 0
            used_letters = {}
            valid = True
            for ch in word:
                if ch in letters:
                    if ch not in used_letters:
                        used_letters[ch] = 1
                        curr_score += letter_scores[ch]
                    elif used_letters[ch] < letter_count[ch]:
                        used_letters[ch] += 1
                        curr_score += letter_scores[ch]
                    elif used_letters[ch] >= letter_count[ch]:
                        valid = False
                        break
                else:
                    valid = False
                    break
            
            if valid:
                word_scores.append([word, {"score": curr_score, "used_letters": used_letters}])
        
        subsets = [[]]
        for k, v in word_scores:
            last = len(subsets)

            for i in range(last):
                
                subsets.append([*subsets[i], (k, v)])

                curr = subsets[len(subsets) - 1]
                curr_score = 0
                curr_letter_count = {}
                valid = True

                for el in curr:
                    for letter, count in el[1]['used_letters'].items():
                        if letter not in curr_letter_count:
                            curr_letter_count[letter] = count
                        else:
                            curr_letter_count[letter] += count

                    curr_score += el[1]["score"]
                for letter, count in curr_letter_count.items():
                    if count > letter_count[letter]:
                        valid = False
                        subsets.pop()
                        break
                    
                if valid and curr_score > max_score:
                    max_score = curr_score

        return max_score




# maxScoreWords(["dog","cat","dad","good"], ["a","a","c","d","d","d","g","o","o"],[1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0])

# maxScoreWords(['get', 'set'], ["g","s","e","t"], [0,0,0,0,1,0,2,0,0,0,0,0,0,0,0,0,0,0,3,1,0,0,0,0,0,0])
# 5

maxScoreWords(["e","bac","baeba","eb","bbbbd","cad","c","c"], ["a","a","a","a","a","a","a","b","b","b","b","b","b","c","c","c","c","c","c","d","d","d","d","d","d","d","e","e","e","e"], [8,4,6,8,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])