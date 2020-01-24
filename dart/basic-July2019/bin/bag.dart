import 'dart:io';

void main() {
  int width = int.parse(stdin.readLineSync());
  int height = int.parse(stdin.readLineSync());
  int deepness = int.parse(stdin.readLineSync());
  bool isPriority = stdin.readLineSync() == 'true';


  double tax = 0;
  int size = width * height * deepness;

  if (size > 50 && size <= 100) {
    tax = 25;
    if(isPriority) {
        tax = 0;
    }
  } 
  else if (size > 100 && size <= 200) {
     tax = 50;
    if(isPriority) {
       tax = 10;
    }
  } 
  else if (size > 200 && size <= 300) {
    tax = 100;
    if(isPriority) {
      tax = 20;
    }
  }

  print('Luggage tax: ${tax.toStringAsFixed(2)}');
}
