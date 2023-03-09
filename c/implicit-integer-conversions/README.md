# Implicit integer conversions

C has the integer types `_Bool`, `char`, `short`, `int`, `long` and `long long`,
in signed and unsigned variants. Their sizes depend on the C implementation.
The other defined integer types like `time_t` or the `stdint.h` types
are just defined as aliases.

In expressions, values of types `char` and `short` automatically get promoted to `int`,
`unsigned char` and `unsigned short` get promoted to `unsigned int`.

If an expression of an unsigned type results in a value that doesn't fit in the type,
it gets truncated; for a signed type however this results in undefined behavior, meaning
that the C standart imposes no requirements on the behavior of the entire program.
Anything goes, such as formating your entire hard drive.

Operands to arithmetic expressions get converted to the same type (balancing).
If one type is signed, the other is unsigned and both are of the same rank,
they get converted to the unsigned type.