# Shadowing Assignment to Globals

In Python, global variables are always in scope. They can not
only be read, but also modified. However, if you try to modify them
by assigning directly to the variable, a new variable that shadows
the global variable is created instead (declare the variable as `global`
within the function to prevent this).
