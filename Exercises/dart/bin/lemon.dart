import 'dart:io';

void main() {
  double lemons = double.parse(stdin.readLineSync());
  double shugar = double.parse(stdin.readLineSync());
  double water = double.parse(stdin.readLineSync());

  double limonJuice = lemons * 980;
  double allJuice = limonJuice + (water * 1000) + (shugar * 0.3);
  int cups = (allJuice / 150).floor();
  double earnedMoney = cups * 1.20;
  print('All cups sold: $cups');
  print('Money earned: ${earnedMoney.toStringAsFixed(2)}');
 
}
