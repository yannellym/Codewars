import math 

def max_value(nums):
  largest_num = -math.inf
  for digit in nums:
    if digit > largest_num:
      largest_num = digit
  return largest_num
    
