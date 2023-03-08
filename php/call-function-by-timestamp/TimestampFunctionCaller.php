<?php

class TimestampFunctionCaller {
    /**
     * The __get magic method will get called when you request a property
     * that does not exist on an instance of this class, we will then calculate
     * the timestamp that is needed to call a function with the same name as this
     * property.
     */
    public function __get(string $name): mixed
    {
        $map = str_split('abcdefghijklmnopqrstuvwxyz');

        $count = -1;

        $reversedCharacters = array_reverse(str_split($name));

        foreach ($reversedCharacters as $i => $char) {
            $count += (array_search($char, $map) + 1) * 26 ** $i;
        }

        $date = new DateTime();
        $date->setTimestamp($count);

        return $date->format(DATE_RFC3339);
    }

    /**
     * The __call method will get called whenever a non-existing method is called
     * on and instance of this class. We will use the name of this non-existing method,
     * which should be a valid RFC3339 timestamp, and start processing it.
     * We leverage the ASCII incrementing functionality and increment a starting string "a"
     * as many times as there are seconds since epoch until the date calculated from the given timestamp.
     * This will result in a string with the name of the original function we are trying to call
     * and, since we're using PHP, we can just call that string as if it were a symbol.
     */
    public function __call(string $name, array $arguments): mixed
    {
        $count = DateTime::createFromFormat(DATE_RFC3339, $name)->getTimestamp();

        $functionName = 'a';

        for ($i = 0; $i < $count; $i++) {
            $functionName++;
            $functionName = (string) $functionName;
        }

        return $functionName();
    }
}
