Go interfaces values consist of two pointers: One identifying the concrete type, necessary for calling interface methods or casting, the other pointing to the actual data.

In the example, `this_is_nil` has the concrete type `*int`, so storing it's value in an interface sets the interface's type pointer accordingly and stores `this_is_nil`'s value in the data pointer.

Comparing this interface to nil checks whether both pointers are nil – so trying to dereference it will result in a nil pointer dereference even though you explicitly checked that the interface isn't nil.

Last tested with Go 1.21