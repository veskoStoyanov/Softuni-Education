import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MotorService } from '../../../services/motor/motor.service';
import { Motor } from '../../../models/Motor';

@Component({
  selector: 'app-moto-details',
  templateUrl: './moto-details.component.html',
  styleUrls: ['./moto-details.component.css']
})
export class MotoDetailsComponent implements OnInit {
  singleMotor: Motor;
  constructor(private route: ActivatedRoute, private motorService: MotorService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {      
      let id = params['id'];    

      this.motorService
        .getSingleMotor(id)
        .subscribe(data => {         
          this.singleMotor = data;                          
        })});
  }
}
