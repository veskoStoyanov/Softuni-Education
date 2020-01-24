import 'dart:io';

void main() {
  String finalTicket;
  double finalPrice;
  int finalMinutes = 4294967296;
int hours = 0;

  while (true) {
    String ticket = stdin.readLineSync();
    if (ticket == 'End') {
      break;
    }

    double price = double.parse(stdin.readLineSync());
    int minutes = int.parse(stdin.readLineSync());

    if (minutes < finalMinutes) {
      finalMinutes = minutes;
      finalPrice = price;
      finalTicket = ticket;
    }      
  }

  print(finalMinutes);

  while (true) {
      if (finalMinutes < 60) {
        break;
      }
      finalMinutes -= 60;
      hours += 1;
    }
      print(finalMinutes);

  print('Ticket found for flight $finalTicket costs ${(finalPrice * 1.96).toStringAsFixed(2)} leva with ${hours}h ${finalMinutes}m stay');
}
