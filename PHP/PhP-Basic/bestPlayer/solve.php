<?php

$bestPlayer = '';
$bestScore = -1;
while(true) {
    $playerName = readline();
    if($playerName == "END") {
        break;
    }
    $scores = intval(readline());

    if ($bestScore < $scores) {
        $bestPlayer = $playerName;
        $bestScore = $scores;
    }

    if($scores >= 10) {
        break;
    }
}

echo "$bestPlayer is the best player!".PHP_EOL;

if($scores >=3 ) {
echo "He has scored $bestScore goals and made a hat-trick !!!";
}else {
    echo "He has scored $bestScore goals.";
}

