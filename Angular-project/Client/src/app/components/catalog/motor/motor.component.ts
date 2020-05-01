import { Component, OnInit, Input} from '@angular/core';
import {MotorService} from '../../../services/motor/motor.service';
import { Motor } from '../../../models/Motor';
import {Router} from '@angular/router';

@Component({
  selector: 'app-motor',
  templateUrl: './motor.component.html',
  styleUrls: ['./motor.component.css']
})
export class MotorComponent implements OnInit {
  @Input('motor') motor: Motor;
  likes: number;
  userId: string = window.sessionStorage.getItem('userId')
  constructor(private motorService: MotorService, private router: Router) { }

  ngOnInit() {
    if(this.motor) {
      this.likes = this.motor.likes.length -1 || 0
    }
  }

}
