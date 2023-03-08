<?php

require __DIR__ . '/TimestampFunctionCaller.php';

// This will print out the timestamp that is needed to call a function called "login"
echo (new TimestampFunctionCaller)->login . PHP_EOL;
