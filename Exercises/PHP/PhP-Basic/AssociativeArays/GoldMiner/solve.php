<?php

$goldArr = [];


while (true) {
    $type = readline();
    if ($type === 'stop') {
        break;
    }
    $quantity = intval(readline());

    if (!key_exists($type, $goldArr)) {
        $goldArr[$type] = 0;
    }
    $goldArr[$type] += $quantity;
}

foreach ($goldArr as $key => $value) {
    echo "$key -> $value"."K".PHP_EOL;
}