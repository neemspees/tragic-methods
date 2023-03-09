# Type-erased generics

The Java Virtual Machine does not have generics. The compiler does not monomorphise
them, it fakes them by using `Object` instead of the generic type.

As a consequence, only one class object represents all concrete instantiations of
the generic class. The value of type parameters isn't known at runtime and
therefore you can't do everything with a type parameter that you can do with
a concrete type. For example, you can't obtain its `Class` object or
create an array of it.

## Workarounds
- use `Object[]` and add casts everywhere
- use an `ArrayList`, which does the same internally (but adds a layer of indirection)
- require the caller to repeat themself and take an argument of type `Class` that specifies
the generic parameter (which is known at compile-time but got erased), then use reflection
to create a new array of that class (`java.lang.reflect.Array.newInstance`)