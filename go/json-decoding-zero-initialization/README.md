# JSon decoding with zero-initialization

In Go, all values are zero initialized. Additionally, JSON decoding ignores doesn't check for the presence of all values and ignores extra values.

As a result, trying to parse JSON with the wrong schema can easily silently succeed and return a struct with zero-initialized fields.

Tested with Go 1.22
