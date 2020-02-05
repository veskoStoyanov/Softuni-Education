<?php

$team = readline();
$souvenir = readline();
$cnr = intval(readline());
$price = 0;

if ($team === 'Argentina') {
    if ($souvenir === 'flags') {
        $price = 3.25;
    } else if ($souvenir === 'caps') {
        $price = 7.20;
    } else if ($souvenir === 'posters') {
        $price = 5.10;
    } else if ($souvenir === 'stickers') {
        $price = 1.25;
    }else {
        echo "Invalid stock!";
        return;
    }
} else if ($team === 'Brazil') {
    if ($souvenir === 'flags') {
        $price = 4.20;
    } else if ($souvenir === 'caps') {
        $price = 8.50;
    } else if ($souvenir === 'posters') {
        $price = 5.35;
    } else if ($souvenir === 'stickers') {
        $price = 1.20;
    }else {
        echo "Invalid stock!";
        return;
    }
}else if ($team === 'Croatia') {
    if ($souvenir === 'flags') {
        $price = 2.75;
    } else if ($souvenir === 'caps') {
        $price = 6.90;
    } else if ($souvenir === 'posters') {
        $price = 4.95;
    } else if ($souvenir === 'stickers') {
        $price = 1.10;
    }else {
        echo "Invalid stock!";
        return;
    }
}else if ($team === 'Denmark') {
    if ($souvenir === 'flags') {
        $price = 3.10;
    } else if ($souvenir === 'caps') {
        $price = 6.50;
    } else if ($souvenir === 'posters') {
        $price = 4.80;
    } else if ($souvenir === 'stickers') {
        $price = 0.90;
    }else {
        echo "Invalid stock!";
        return;
    }
}else {
    echo "Invalid country!";
    return;
}
$price *=$cnr;
printf("Pepi bought $cnr $souvenir of $team for %.2f lv.", $price);


