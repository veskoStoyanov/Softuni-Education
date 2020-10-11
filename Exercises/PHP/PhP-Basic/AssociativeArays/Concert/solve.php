<?php

$arrNames = [];
$arrTime = [];
$totalTime = 0;

while (true) {
    $input = explode("; ", readline());
    if ($input[0] === 'start of concert') {
        break;
    }

    $command = $input[0];

    if ($command === "Add") {
        $band = $input[1];
        $names = explode(", ", $input[2]);
        if (!key_exists($band, $arrNames)) {
            $arrNames[$band] = [];
        }

        foreach ($names as $value) {
            if (!in_array($value, $arrNames[$band])) {
                array_push($arrNames[$band], $value);
            }
        }
    } else if ($command === "Play") {
        $band = $input[1];
        $time = intval($input[2]);
        if (!key_exists($band, $arrTime)) {
            $arrTime[$band] = 0;
        }
        $arrTime[$band] += $time;
        $totalTime += $time;
    }
}

$lastBand = readline();

//arsort($arrTime);
uksort($arrTime, function($one, $two) use ($arrTime){
    $timeComparison = $arrTime[$two] <=> $arrTime[$one];
    if($timeComparison != 0) {
        return $timeComparison;
    }
    return $one <=> $two;

});

echo "Total time: $totalTime".PHP_EOL;

foreach ($arrTime as $key => $value) {
    echo "$key -> $value".PHP_EOL;
}

echo $lastBand.PHP_EOL;

foreach ($arrNames[$lastBand] as $value) {
        echo "=> ".$value.PHP_EOL;
}


