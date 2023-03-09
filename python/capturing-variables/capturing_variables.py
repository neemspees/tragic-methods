# I want a list of ten functions, returning 0 through 9, but this won't do it.

funcs = [lambda: i for i in range(10)]
print([f() for f in funcs])

# Prints [9, 9, 9, 9, 9, 9, 9, 9, 9, 9].  Oops.

# The issue is that the *same* variable `i` is in scope for each `lambda`
# and gets captured.  So its *final* value, 9, is what gets returned
# for each function.
#
# One solution is to use an intermediate function to prevent the capture
# by creating a new scope each time. Using `functools.partial` also works.

def make_func(i):
    return lambda: i

funcs = [make_func(i) for i in range(10)]
print([f() for f in funcs])

# Correctly prints [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
