import 'dart:io';

void main() {
  int reservationDay = int.parse(stdin.readLineSync());
  int reservationMonth = int.parse(stdin.readLineSync());
  int accommodationDay = int.parse(stdin.readLineSync());
  int accommodationMonth = int.parse(stdin.readLineSync());
  int leavingDay = int.parse(stdin.readLineSync());
  int leavingMonth = int.parse(stdin.readLineSync());

  int daysBeforeAccomodation = accommodationDay - reservationDay;

  if (reservationMonth < accommodationMonth) {
    daysBeforeAccomodation += 30;
  }

  int hollidaydays = leavingDay - accommodationDay;

  double pricePerRoom = 30;
  if (daysBeforeAccomodation >= 10) {
    pricePerRoom = 25;
  }

  double totalPrice = pricePerRoom * hollidaydays;
  if (reservationMonth < accommodationMonth) {
    totalPrice -= totalPrice * 0.2;
  }

  print('Your stay from $accommodationDay/$accommodationMonth to $leavingDay/$leavingMonth will cost ${totalPrice.toStringAsFixed(2)}');
}
