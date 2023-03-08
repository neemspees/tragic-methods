# Array variance

Java arrays are covariant, meaning that `A[]` is a subclass of `B[]`
if `A` is a subclass of `B`. This is unsound: You can insert objects
of type `B` into a `B[]`, but not into an `A[]`. Because of this,
Java needs to throw a `java.lang.ArrayStoreException` at run time,
even though the code passes type-checking.
