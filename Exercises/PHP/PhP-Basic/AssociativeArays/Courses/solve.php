<?php

$courses = [];


while (true) {
    $input = explode(" : ", readline());
    if ($input[0] == 'end') {
        break;
    }
    $course = $input[0];
    $name = $input[1];

    if (!key_exists($course, $courses)) {
        $courses[$course] = [];
    }

    array_push($courses[$course], $name);
}

uksort($courses, function ($lng1, $lng2) use ($courses) {
    $a = count($courses[$lng1]);
    $b = count($courses[$lng2]);
    return $b <=> $a;

});

foreach ($courses as $key => $value) {
    $cnr = count($value);
    echo "$key: $cnr" . PHP_EOL;
    sort($value);
    foreach ($value as $student) {
        echo "-- $student".PHP_EOL;
    }
}