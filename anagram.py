Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

test_00:
anagrams('restful', 'fluster') # -> True

def anagrams(s1, s2):
  return sorted(s1) == sorted(s2)
