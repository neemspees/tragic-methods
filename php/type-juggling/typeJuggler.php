<?php

$values = ["mommy", "daddy", "stepsister", "big brother"];
var_dump(in_array("mommy", $values));

// returns bool(true)

$values = ["mommy", "daddy", "stepsister", "big brother"];
var_dump(in_array(0, $values));

// returns bool(true)
