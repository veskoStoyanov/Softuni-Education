import { Component, OnInit, Input} from '@angular/core';
import { Motor } from '../../../models/Motor';

@Component({
  selector: 'app-motor',
  templateUrl: './motor.component.html',
  styleUrls: ['./motor.component.css']
})
export class MotorComponent implements OnInit {
  @Input('motor') motor: Motor;

  constructor() { }

  ngOnInit() {
  }

}
