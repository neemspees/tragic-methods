import random

def generate_id(length:int) -> str:
	"""Generate a random ID string of specified length"""
	print("A new random ID has been requested!")
	return ''.join(random.choices('0123456789abcdef', k=length))

class Demo:
	"""A class representing a demo object with an ID"""
	def __init__(self,id = generate_id(6)):
		"""Instantiate the demo object with the ID from the 'id' parameter."""
		self.id = id

print('Starting script execution!')

# Create two objects with an empty constructor, 
# relying on the constructor's default values to populate the fields
demo_object_a = Demo()
demo_object_b = Demo() 

# Print the IDs of the two demo objects
print(f'Random(?) ID of object a: {demo_object_a.id}')
print(f'Random(?) ID of object b: {demo_object_b.id}')