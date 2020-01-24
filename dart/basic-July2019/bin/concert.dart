import 'dart:io';

void main() {
  int cnr = int.parse(stdin.readLineSync());
  String finalticket ='';

  for (var i = 0; i < cnr; i++) {
    String ticket = stdin.readLineSync();
    if(ticket.length == 4) {

      if(ticket.codeUnitAt(0) >= 65 && ticket.codeUnitAt(0) <=90) {
         finalticket = ticket[0] + ticket[1] + ticket[2];
         
           
      } else {
         finalticket = ticket[3] + ticket[1] + ticket[2];
        }
    }
    else if(ticket.length == 5 || ticket.length == 6) {
      finalticket = ticket[0] + ticket.codeUnitAt(1).toString();
    }

    print('Seat decoded: $finalticket');
    
  }
  
}