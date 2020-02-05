<?php

$students = [];
$cnr = intval(readline());

for ($i = 0; $i < $cnr; $i++) {
    $name = readline();
    $grade = floatval(readline());

    if (!key_exists($name, $students)) {
        $students[$name] = [];
    }
    array_push($students[$name], $grade);
}

$averageGrades = [];
foreach ($students as $key => $value) {

    $num = 0;
    $cnr = 0;
    foreach ($value as $grade) {
        $num += $grade;
        $cnr++;
    }
    $num =number_format($num / $cnr, 2);
    if ($num >= 4.50) {
        $averageGrades[$key] = $num;
    }

}
arsort($averageGrades);
foreach ($averageGrades as $key=> $value) {
    echo "$key -> $value".PHP_EOL;
}



