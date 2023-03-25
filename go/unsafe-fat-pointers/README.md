# Unsafe Fat Pointers
Go version: All, tested with 1.20

Most operations in Go are memory safe. The `unsafe` package
contains those that are not. There is however a surprising exeption
to this:

Interfaces, slices and strings are implemented via unsynchronized
fat pointers. For strings this is not a problem as they are immutable,
but when interaces or slices are mutated by one thread while being read
by another, a torn read may be observed. An interface consists of a pointer
to an object and a pointer to a vtable, so in this event a method belonging
to one type will be called with the data of another.

This can cause arbitrary badness, from simply crashing to silently corrupting
data to calling a function at an address chosen by an attacker. Similarly,
slices consist of length, capacity and data pointers, so unsynchronized
access may result in e.g. writing beyond the end of the slice.
