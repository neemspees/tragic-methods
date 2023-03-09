# Initialize attributes from function
Using functions as default parameters for class constructors will cause them to only be executed once during initialization.

## Language
Version Python 3.10.7


## Explanation
Looking at the code in `initialize-attributes-from-function.py` one might expect that the two demo objects would get different random IDs, but they don't.
Instead, the `generate_id` method is only called once during class initialization and the value is then reused for all following calls of the constructor.
No warnings are generated from all of this (at least not using my VSCode setup) and the entire code seems to work perfectly fine until a second object of the affected class is created and the ids are compared.
