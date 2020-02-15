<?php

$cnrCosunack = 0;
$cnrColoredEggs = 0;
$cnr = 0;

$budget = floatval(readline());
$flourPrice = floatval(readline());

$eggsPrice = $flourPrice - ($flourPrice * 0.25);
$milkPrice = ($flourPrice + ($flourPrice * 0.25)) / 4;
$cosunacPrice = $flourPrice + $eggsPrice + $milkPrice;

while(true) {
    if($budget < $cosunacPrice) break;

    $budget -= $cosunacPrice;
    $cnrColoredEggs +=3;
    $cnrCosunack +=1;
    $cnr++;


    if($cnr % 3 == 0) {
        $cnrColoredEggs -= $cnrCosunack -2;
    }
}

printf("You made %.0f cozonacs! Now you have %.0f eggs and %.2fBGN left.", $cnrCosunack, $cnrColoredEggs, $budget);



