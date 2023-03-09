# Description: The `is` operator in Python can lead to unexpected behavior when used with mutable objects.

## Tested using
Version Python 2 and Python 3.10

# Explanation:

In Python, the `is` operator checks if two objects are the same object in memory, not just if they have the same value. In the example above, the variable `a` is assigned a list `[1, 2, 3]`. The variable `b` is then assigned the same list as `a`. When we check `a is b`, it returns `True` because both variables point to the same object in memory.

However, when we append the value `4` to the list `a`, it modifies the list in place. Since `b` is pointing to the same object in memory as `a`, the value of `b` is also modified. When we check `a is b` again, it still returns `True`, even though the objects are no longer the same.

This behavior can lead to unexpected bugs in code that relies on the `is` or `==` operator to compare objects.

## Example:

### Create two lists with the same values
a = [1, 2, 3]
b = [1, 2, 3]

### Check if the two lists are the same object in memory
print(a is b) # Output: False

### Check if the two lists have the same values
print(a == b) # Output: True