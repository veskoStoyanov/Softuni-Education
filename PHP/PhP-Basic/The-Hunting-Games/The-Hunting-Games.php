<?php

$days = intval(readline());
$players = intval(readline());
$groupEnergy = floatval(readline());
$waterPerDay = floatval(readline());
$foodPerDay = floatval(readline());

$groupsWater = $waterPerDay * $players * $days;
$groupsFood = $foodPerDay * $players * $days;

for ($i = 1; $i <= $days; $i++) {

    $lostEnergy = floatval(readline());

    $groupEnergy -= $lostEnergy;

    if ($groupEnergy <= 0) {
        break;
    }
    if ($i % 2 === 0 ) {
        $groupEnergy += $groupEnergy * 0.05;
        $groupsWater -= $groupsWater * 0.3;
    }
    if ($i % 3 === 0) {
        $groupEnergy += $groupEnergy * 0.1;
        $groupsFood -= $groupsFood / $players;
    }
}

if ($groupEnergy >= 0) {
    printf('You are ready for the quest. You will be left with - %.2f energy!'.PHP_EOL, $groupEnergy);
} else {
    printf('You will run out of energy. You will be left with %.2f food and %.2f water.'.PHP_EOL, $groupsFood, $groupsWater);
}





