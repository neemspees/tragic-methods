# Type juggling string to number

## Tested using
PHP 8.2

## Explanation

Due to the nature of how PHP handles type casting from string to number there are a few strange quirks that arise.

Consider the following string:
```php
$casted = (int) "test"; // 0
```

PHP casts this into an integer with the value 0. I think this is weird in my opinion, but at least we know that string to integer casts will be 0 every time ... right?

Well let's take the following example
```php
$casted = (int) "123test"; // 123
```

This is what's known as a leading numeric string and when casted to an integer, PHP just drops everything after the number. So in this case `$casted` would be equal to `int(123)`.

> [PHP docs on what is defined as a numeric string](https://www.php.net/manual/en/language.types.numeric-strings.php)

This gave me an idea for a rather odd function:
```php
function startsWithNumber(string $input) {
    return (bool) (float) $input;
}

startsWithNumber('test'); // false

startsWithNumber('123test'); // true
```

But please don't use this in production because it fails when using it on strings that start with `"0"` due to the fact that boolean casts on `0` will result in a `false` value.
