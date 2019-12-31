import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MotorService } from '../../../services/motor/motor.service';
import {UserService} from '../../../services/user/user.service';
import { Motor } from '../../../models/Motor';
import { ToastrService } from 'ngx-toastr';
import {Auth} from '../../../services/auth';


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
    private toastr: ToastrService,
    private router: Router,
    private userService: UserService,
    public auth: Auth
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params['id'];

      this.motorService
        .getSingleMotor(id)
        .subscribe(data => {
          this.singleMotor = data;
          this.isCreator = this.singleMotor.creator.toString() === this.userId;
        })

    });
  }

  like() {
    this.motorService
      .likeMotor(this.singleMotor._id, this.userId)
      .subscribe(success => {
        if (success['success']) {
          this.toastr.success('Motor was liked!', 'Success!');
        } else {
          this.toastr.error('Motor cannot be like!', 'Warning!');
        }

      }, err => {
        this.toastr.error('Motor cannot be like!', 'Warning!')
        console.log(err);

      })
  }

  delete() {
    this.motorService
      .deleteMotor(this.singleMotor._id)
      .subscribe(data => {
        if (data['success']) {
          this.toastr.success('Motor was deleted!', 'Success!');
          this.router.navigate(['/catalog']);
        } else {
          this.toastr.error('Motor cannot be like!', 'Warning!');
        }

      },
        err => {
          this.toastr.error('Motor cannot be like!', 'Warning!');
          console.log(err);

        })
  }

  
}
