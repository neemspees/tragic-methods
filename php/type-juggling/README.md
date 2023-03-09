# PHP Type Juggling

## Tested using
PHP 7.4

## Explanation

The `in_array()` function in PHP searches for a value in an array and returns true if the value is found, otherwise it returns false.

In the first example, the value "mommy" is present in the `$values` array, so `in_array("mommy", $values)` returns true.

In the second example, the value 0 is used as the search parameter in `the in_array()` function. PHP has a type juggling feature that converts "mommy", "daddy", "stepsister", and "big brother" into integers when compared to the integer value 0. Since all of these strings are not numeric, they are converted to 0. Therefore, 0 is present in the `$values` array, so `in_array(0, $values)` returns true.

It's important to note that using loose comparison operators like == can lead to unexpected behavior when comparing strings and integers. In this case, it's better to use the strict comparison operator === to compare both the value and the type of the variables being compared.