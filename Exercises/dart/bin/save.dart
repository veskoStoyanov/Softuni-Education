import 'dart:io';


main() {
double salary = double.parse(stdin.readLineSync());
double months = double.parse(stdin.readLineSync());
double expenses = double.parse(stdin.readLineSync());

double unexpectedExpenses = double.parse((salary * 0.3).toStringAsFixed(2));
double savings = salary - (expenses + unexpectedExpenses);

double allSavings = savings * months;
double percentsSaving = (savings / salary) * 100;

print('She can save ${percentsSaving.toStringAsFixed(2)}%');

print(allSavings.toStringAsFixed(2));





}