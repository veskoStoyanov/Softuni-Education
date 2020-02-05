<?php

$salary = floatval(readline());
$months = intval(readline());
$expenses = floatval(readline());

        $savings = 0;

$savings= $salary - ( $expenses + ($salary * 0.3));

    $percentSalary = $savings / $salary * 100;
    $savings +=$months;


printf( 'She can save %.2f', $percentSalary).PHP_EOL;
printf('%.2f', $savings);
