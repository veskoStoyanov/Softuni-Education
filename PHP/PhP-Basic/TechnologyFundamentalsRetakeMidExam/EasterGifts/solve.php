<?php

$presents = explode(" ", readline());

while (true) {
    $input = readline();
    if ($input == 'No Money') break;
    $commands = explode(" ", $input);
    $command = $commands[0];
    $gift = $commands[1];

    if ($command == 'OutOfStock') {
        $index = array_search($gift, $presents);


        while (in_array($gift, $presents)) {

            $index = array_search($gift, $presents);
            array_splice($presents, $index, 1, "None");
        }
    } else if ($command == 'Required') {
        $index = intval($commands[2]);
        $count = count($presents);
        if($index >= 0 && $index < $count) {
            array_splice($presents, $index, 1, $gift);
        }
    } else if($command == 'JustInCase') {
        array_pop($presents);
        $presents[] = $gift;
    }
}


$presents= array_filter($presents, function ($el) {
    return $el != 'None';
});

echo implode(" ", $presents);