<?php

require __DIR__ . '/TimestampFunctionCaller.php';

function login() {
    echo 'You successfully hacked the system!' . PHP_EOL;
}

// This execution will call the login function above
[new TimestampFunctionCaller, '1970-03-08T13:52:11+00:00']();
