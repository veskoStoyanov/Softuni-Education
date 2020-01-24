import 'dart:io';

void main() {
  int cnr =0;

  int startPoints = int.parse(stdin.readLineSync());

  while (true) {
    
    if(startPoints <=0) {
      break;
    }
    cnr++;
    String type = stdin.readLineSync();
    if(type == 'bullseye') {
      break;
    }
    int points = int.parse(stdin.readLineSync());
    
     if(type == 'number section') {
           startPoints -= points;
    }
   else if(type == 'double ring') {
            startPoints -= points * 2;
    }
    else if(type == 'triple ring') {
           startPoints -= points * 3;
    }
  }
      if(startPoints >= 0) {
            print('Congratulations! You won the game in $cnr moves!');
      }
      else {
        
            print('Sorry, you lost. Score difference: ${startPoints.abs()}.');
      }
      }