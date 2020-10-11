import 'dart:io';

void main() {
  int budget = int.parse(stdin.readLineSync());
  double towel = double.parse(stdin.readLineSync());
    int discount = int.parse(stdin.readLineSync());

  double umbella = (towel / 3) * 2;
  double slippers = umbella * 0.75;
  double bag = (slippers + towel) / 3;

  double total = towel + umbella + slippers + bag;
  total -= total * (discount / 100);

  if (budget >= total) {
    print(
        "Annie's sum is ${total.toStringAsFixed(2)} lv. She has ${(budget - total).toStringAsFixed(2)} lv. left.");
  } else {
    print("Annie's sum is ${total.toStringAsFixed(2)} lv. She needs ${(total - budget).toStringAsFixed(2)} lv. more.");
  }
}
