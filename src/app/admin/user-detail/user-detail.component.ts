import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { UserModel } from '../../common/models/user.model'
import { UserService } from '../../common/services/user.service'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: UserModel;
  userId: string;  
  updateFailed: boolean;
  
  userForm: FormGroup;  
  nameCtrl: FormControl;
  birthYearCtrl: FormControl;
  mobileNumberCtrl: FormControl;
  
  static validYear(control: FormControl) {
    const birthYear = control.value;
    return Number.isNaN(birthYear) ||
      birthYear < 1900 ||
      birthYear > new Date().getFullYear() ? { invalidYear: true } : null;
  }

  constructor(private fb: FormBuilder, private router: Router, 
    private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params['id'];

    this.nameCtrl = this.fb.control('', Validators.compose([
      Validators.required,
      Validators.minLength(3)
    ]));
    this.birthYearCtrl = this.fb.control('', Validators.compose([
      Validators.required,
      UserDetailComponent.validYear
    ]));
    this.mobileNumberCtrl = this.fb.control('');

    this.userForm = this.fb.group({
      name: this.nameCtrl,
      birthYear: this.birthYearCtrl,
      mobileNumber: this.mobileNumberCtrl
    });
    
    this.userService.getUser(this.userId)
      .subscribe(user => {
        this.user = user;
        this.nameCtrl.setValue(this.user.name);
        this.birthYearCtrl.setValue(this.user.birthYear);
        this.mobileNumberCtrl.setValue(this.user.mobileNumber);
      });
  }

  update() {    
    this.userService.updateUser(
      this.userId,~
      this.userForm.value.name,
      this.userForm.value.birthYear,
      this.userForm.value.mobileNumber
    ).subscribe(
      () => this.router.navigate(['/admin/users']),
      () => this.updateFailed = true
      );
  }
}
