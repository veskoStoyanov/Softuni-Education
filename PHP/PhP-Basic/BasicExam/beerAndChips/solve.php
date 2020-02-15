<?php

$fenName = readline();
$budget = floatval(readline());
$botles = intval(readline());
$chips = intval(readline());

$totalBeer = 1.20 * $botles;
$chipsPrice = $totalBeer * 0.45;
$totalChips = ceil($chipsPrice * $chips);
$totalPrice = $totalChips + $totalBeer;

$resMoney = $budget - $totalPrice;

if ($resMoney >= 0 ) {
    printf("$fenName bought a snack and has %.2f leva left.".PHP_EOL, $resMoney);
}else {
    printf("$fenName needs %.2f more leva!".PHP_EOL, abs($resMoney));
}

