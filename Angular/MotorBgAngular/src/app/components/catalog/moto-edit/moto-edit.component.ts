import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MotorService } from '../../../services/motor/motor.service';
import {UserService} from '../../../services/user/user.service';
import { Motor } from '../../../models/Motor';
import { ToastrService } from 'ngx-toastr';
import {FormGroup, FormControlName, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-moto-edit',
  templateUrl: './moto-edit.component.html',
  styleUrls: ['./moto-edit.component.css']
})
export class MotoEditComponent implements OnInit {
  singleMotor: Motor;
  editedMotor: Object;
  form = new FormGroup({
    city:  new FormControl('', [Validators.required]),
    model: new FormControl('', [Validators.required, Validators.minLength(3)]),
    image: new FormControl('', [Validators.required, Validators.minLength(5)]),
    price: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required, Validators.minLength(10)])});

  constructor(
    private route: ActivatedRoute,
    private motorService: MotorService,
    private toastr: ToastrService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params['id'];

      this.motorService
        .getSingleMotor(id)
        .subscribe(data => {        
          this.singleMotor = data;      
        })
    });

  }

  editMotor() {
    this.editedMotor = {
      city: this.form.get('city').value || this.singleMotor.city,
      model: this.form.get('model').value || this.singleMotor.model,
      image: this.form.get('image').value || this.singleMotor.image,
      price: this.form.get('price').value || this.singleMotor.price,
      description: this.form.get('description').value || this.singleMotor.description,
      likes: this.singleMotor.likes,
      creator: this.singleMotor.creator,
      userId: sessionStorage.getItem('userId')
    }
     
  this.motorService
    .editMotor(this.editedMotor, this.singleMotor._id)
    .subscribe(data => {
      if (data['success']) {
        this.toastr.success('Motor was edited!', 'Success!');
        this.router.navigate(['/catalog'])
      } else {
        this.toastr.error('Error ocurs please try again!', 'Warning');
      }
      this.router.navigate(['/catalog'])
      
    },
    err => {
      this.toastr.error('Error ocurs please try again!', 'Warning');
      console.log(err);     
    })}
}
