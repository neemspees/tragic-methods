class Foo<T> {
    // You can create an array type out of any type
    Object[] concrete_array;
    // The type can be a type parameter
    T[] generic_array;

    Foo() {
        // You can also create instances of the array type
        concrete_array = new Object[0];
        // …but not always (this fails to compile)
        generic_array = new T[0];
    }
}
