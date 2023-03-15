<?php

function startsWithNumber(string $input) {
    return (bool) (float) $input;
}

var_dump(startsWithNumber('123test')); // bool(true)

var_dump(startsWithNumber('test')); // bool(false)

var_dump(startsWithNumber('-10test')); // bool(true)

var_dump(startsWithNumber('.1test')); // bool(true)

var_dump(startsWithNumber('0test')); // bool(false) :(
