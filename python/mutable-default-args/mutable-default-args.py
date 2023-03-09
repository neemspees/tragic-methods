from typing import Optional

def add_two_lists(a: list = [], b: list = []) -> list:
    a += b
    return a

def add_two_lists_proper(a: Optional[list] = None, b: Optional[list] = None) -> list:
    return (a or []) + (b or [])

if __name__ == "__main__":
    print(add_two_lists()) # []
    print(add_two_lists(b=[1])) # [1]

    # Due to the mutability of default parameters in Python, when this function is executed again
    # the value of `a` is now [1], although the intuitive expectation would be that `a` is still []
    a = add_two_lists()
    print(a) # [1]
    a.append(2)
    print(add_two_lists()) # [1, 2]

    print("*" * 80)

    print(add_two_lists_proper()) # []
    print(add_two_lists_proper(b=[1])) # [1]
    # By setting the default to None, and defaulting to a newly constructed empty list, this problem is avoided.
    a = add_two_lists_proper()
    print(a) # []
    a.append(2)
    print(add_two_lists_proper()) # []
