# Initialize attributes from function
Using functions as default parameters for class constructors will cause them to only be executed once during initialization.

## Tested using
Version Python 3.10.7

## Explanation
Looking at the code in `initialize-attributes-from-function.py` one might expect that the two demo objects would get different random IDs, but they don't.
Instead, the `generate_id` method is only called once during class initialization and the value is then reused for all following calls of the constructor.
No warnings are generated from all of this (at least not using my VSCode setup) and the entire code seems to work perfectly fine until a second object of the affected class is created and the ids are compared.

## Workarounds
Python will evaluate the function and assign it as the default value for the function on that evaluation. If you intend that behaviour, then this can be a feature, as many tragic methods may be. But don't fret! There's various work-arounds to this.
1. Replace the `id` default value with the function name instead of the function call. This way, the function instead of it's evaluation is the default. The function will evaluate on each instatiation, and a different ID will be derived.
```python
class Demo:
	"""A class representing a demo object with an ID"""
	def __init__(self, id = generate_id):
		"""Instantiate the demo object with the ID from the 'id' parameter."""
		self.id = id(6)
```
2. Higher order object. Working on the previous idea, we can set up the initializtion method to take any function we would like.
```python
class Demo:
	"""A class representing a demo object with an ID"""
	def __init__(self, id_func = generate_id, id_args = [6]):
		"""Instantiate the demo object with the ID from the 'id' parameter."""
		self.id = id_func(*id_args)
```
In either of these cases, we can avoid unwanted behaviour by being careful to not set the default of `id` to be whatever a function evaluates on the first instatiation.
