a = [1, 2, 3]
b = a
print(a is b) # Output: True

a.append(4)
print(a) # Output: [1, 2, 3, 4]
print(b) # Output: [1, 2, 3, 4]
print(a is b) # Output: True, even though the objects are no longer the same
print(a == b) # Output: True, even though the objects are no longer the same