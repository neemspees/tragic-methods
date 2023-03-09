# Call function by timestamp


## Tested using
PHP 8.0

## Explanation

The __call method will get called whenever a non-existing method is called
on and instance of a class. We will use the name of this non-existing method,
which should be a valid RFC3339 timestamp, and start processing it.

We leverage the ASCII incrementing functionality and increment a starting string "a"
as many times as there are seconds since epoch until the date calculated from the given timestamp.

This will result in a string with the name of the original function we are trying to call
and, since we're using PHP, we can just call that string as if it were a function.

```php
class TimestampFunctionCaller {
    public function __call(string $name, array $arguments): mixed
    {
        $count = DateTime::createFromFormat(DATE_RFC3339, $name)->getTimestamp();

        $functionName = 'a';

        for ($i = 0; $i < $count; $i++) {
            $functionName++; // This line will increment the ASCII value this string, so a -> b -> c -> ...
        }

        return $functionName();
    }
}
```

Let's say we have a function called `login` we wanted to call this way.

It takes `5752331` increments to get from string `"a"` to string `"login"`.
Now we use `5752331` as an epoch timestamp and convert it to RFC3339 resulting in `1970-03-08T13:52:11+00:00`;
We can use this final timestamp to call the login function.

```php
function login() {
    echo 'You successfully hacked the system!' . PHP_EOL;
}

[new TimestampFunctionCaller, '1970-03-08T13:52:11+00:00']();

// > You successfully hacked the system!
```
