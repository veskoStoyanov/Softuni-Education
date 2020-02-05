<?php

$sectors = intval(readline());
$capacity = intval(readline());
$ticketPrice = floatval(readline());

$totalPrice = $ticketPrice * $capacity;

$forOneSector = $totalPrice / $sectors;
$charity = ($totalPrice - ($forOneSector * 0.75)) / 8;

printf("Total income - %.2f BGN".PHP_EOL, $totalPrice);
printf("Money for charity - %.2f BGN".PHP_EOL, $charity);



