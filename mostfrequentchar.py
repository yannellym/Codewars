Write a function, most_frequent_char, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

You can assume that the input string is non-empty.

test_00:
most_frequent_char('bookeeper') # -> 'e'




using a hashmap (dictionary)
def most_frequent_char(s):
  count = {}
  for char in s:
    if char not in count:
      count[char] = 0    
    count[char] += 1
    
  best = None
  for char in s:
    if best is None or count[char] > count[best]:
      best = char
  return best
n = length of string
Time: O(n)
Space: O(n)
using a hashmap (Counter)
from collections import Counter

def most_frequent_char(s):
  count = Counter(s)
  best = None
  for char in s:
    if best is None or count[char] > count[best]:
      best = char
  return best
n = length of string
Time: O(n)
Space: O(n)
