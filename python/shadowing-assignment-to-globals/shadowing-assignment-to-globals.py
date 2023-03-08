list = [0]


def set_to_1():
    list[0] = 1


def set_to_2():
    list = [2]


# Prints 0
print(list[0])

# Prints 1
set_to_1()
print(list[0])

# Still prints 1
set_to_2()
print(list[0])
