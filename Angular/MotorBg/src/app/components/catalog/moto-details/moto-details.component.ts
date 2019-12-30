import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { MotorService } from '../../../services/motor/motor.service';
import { Motor } from '../../../models/Motor';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-moto-details',
  templateUrl: './moto-details.component.html',
  styleUrls: ['./moto-details.component.css']
})
export class MotoDetailsComponent implements OnInit {
  singleMotor: Motor;
  userId: string = window.sessionStorage.getItem('userId');
  isCreator: boolean;

  constructor(
    private route: ActivatedRoute,
    private motorService: MotorService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {      
      let id = params['id'];    

      this.motorService
        .getSingleMotor(id)
        .subscribe(data => {         
          this.singleMotor = data;
          this.isCreator = this.singleMotor.creator.toString() === this.userId;                     
        })});
  }

  like() { 
    this.motorService
    .likeMotor(this.singleMotor._id, this.userId)
    .subscribe(success => { 
      if(success['success']) {
        this.toastr.success('Motor was liked!', 'Success!')
      }else {
        this.toastr.error('Motor cannot be like!', 'Warning!')
      }
       
    }, err => {
      this.toastr.error('Motor cannot be like!', 'Warning!')
      console.log(err);
      
    })}

    delete() {
      
    }
}
