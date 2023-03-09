# Mutable default arguments
Using mutable objects as default arguments in a function will cause their values to change unexpectedly.

## Tested using
Version: Python 3.11.2

## Explanation
One might expect that default arguments of a Python function are immutable, and that running the function multiple times will always return the same result.

That is not the case, as the default arguments are mutable. This means that any operations performed on these values will be persist between function calls, even operations performed on the object done outside the function will change their state (As they are returned by reference, not by value).

See this [stackoverflow post](https://stackoverflow.com/questions/1132941/least-astonishment-and-the-mutable-default-argument) for further details.
