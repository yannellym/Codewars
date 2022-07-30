Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

If begin value is greater than the end, function should returns 0

Examples

2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)


def sequence_sum(begin_number, end_number, step):
    sum = 0
    
    if begin_number > end_number:
        return 0
    
    for num in range(begin_number,end_number+1, step):
        sum += num
    return sum
      
    
    
  import codewars_test as test
from solution import sequence_sum

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(sequence_sum(2, 6, 2), 12)
        test.assert_equals(sequence_sum(1, 5, 1), 15)
        test.assert_equals(sequence_sum(1, 5, 3), 5)
        test.assert_equals(sequence_sum(0, 15, 3), 45)
        test.assert_equals(sequence_sum(16, 15, 3), 0)
        test.assert_equals(sequence_sum(2, 24, 22), 26)
        test.assert_equals(sequence_sum(2, 2, 2), 2)
        test.assert_equals(sequence_sum(2, 2, 1), 2)
        test.assert_equals(sequence_sum(1, 15, 3), 35)
        test.assert_equals(sequence_sum(15, 1, 3), 0)
