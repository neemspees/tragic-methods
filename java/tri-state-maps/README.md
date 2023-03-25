# Tri-State Maps

Java version: Tested with 1.19

Java divides values into primitives and objects. The former are incompatible with
generics. As a result, primitives have to be boxed, that is wrapped in an object.
For convenience Java does this automatically. For example, in `Map.of("foo", 42)`,
the `42` is of type `int`, but gets silently casted to `Integer` before `Map.of` gets
called. Java also automatically unboxes them: When an `Integer` is provided where an
`int` is needed, it calls `Integer.intValue`.

Another difference between primitives and object types is that object types are nullable,
meaning that the value may instead be `null` (named the "billion-dollar-mistake" by its
inventor).

As a result, the Java standard library cannot directly express a map where each entry
contains an `int` (or other primitive), instead for each possible key the map may have
three states: It doesn't contain the key, it maps the key to an integer, or it maps the
keys to `null`.

Therefore using the result of `Map.get`, even after checking whether the key is present
in the map (or alternatively by iterating over the map), and using the result as an `int`
(or other primitive) can result in a `java.land.NullPointerException` for a method call
not visible anywhere in the source code.
