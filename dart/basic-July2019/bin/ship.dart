import 'dart:io';

void main() {
  String typeCruise = stdin.readLineSync();
  String typeRoom = stdin.readLineSync();
  int nights = int.parse(stdin.readLineSync());

  double price = 0;

  if (typeCruise == 'Mediterranean') {
    if (typeRoom == 'standard cabin') {
      price = 27.50;
    } else if (typeRoom == 'cabin with balcony') {
      price = 30.20;
    } else if (typeRoom == 'apartment') {
      price = 40.50;
    }
  } else if (typeCruise == 'Adriatic') {
    if (typeRoom == 'standard cabin') {
      price = 22.99;
    } else if (typeRoom == 'cabin with balcony') {
      price = 25.00;
    } else if (typeRoom == 'apartment') {
      price = 34.99;
    }
  } else if (typeCruise == 'Aegean') {
    if (typeRoom == 'standard cabin') {
      price = 23.00;
    } else if (typeRoom == 'cabin with balcony') {
      price = 26.60;
    } else if (typeRoom == 'apartment') {
      price = 39.80;
    }
  }

  price *=4;

  if(nights > 7) {
    price -= price * 0.25;
  }

print("Annie's holiday in the $typeCruise sea costs ${(price * nights).toStringAsFixed(2)} lv.");
  
}
