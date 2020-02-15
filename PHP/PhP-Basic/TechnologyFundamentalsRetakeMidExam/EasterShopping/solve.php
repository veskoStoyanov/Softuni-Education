<?php

$shops = explode(" ", readline());

$cnr = intval(readline());

for ($i = 0; $i < $cnr; $i++) {
    $input = explode(" ", readline());
    $command = $input[0];

    if ($command == 'Include') {
        $shop = $input[1];
        $shops[] = $shop;
    } else if ($command == 'Visit') {
        $type = $input[1];
        $numbers = intval($input[2]);

        if (count($shops) >= $numbers) {
            if ($type == 'first') {
                for ($i = 0; $i < $numbers; $i++) {
                    array_shift($shops);
                }
            } else if ($type == 'last') {
                for ($i = 0; $i < $numbers; $i++) {
                    array_pop($shops);
                }
            }
        }
    } else if ($command == 'Prefer') {
        $firstIndex = $input[1];
        $secIndex = $input[2];

        if ($firstIndex >= 0 && $firstIndex < count($shops)) {
            if ($secIndex >= 0 && $secIndex < count($shops)) {
                    $firstShop = $shops[$firstIndex];
                    $shops[$firstIndex] = $shops[$secIndex];
                    $shops[$secIndex] = $firstShop;
            }
        }
    }else if($command == 'Place') {
        $shop = $input[1];
        $index = intval($input[2] + 1);
        if( $index >= 0 && $index <=count($shops)) {
            array_splice($shops, $index, 0, $shop);
        }

    }
}
echo 'Shops left:'.PHP_EOL;
echo implode(" ", $shops);



