import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../common/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {  
  userForm: FormGroup;
  passwordForm: FormGroup;
  registrationFailed: boolean;  

  nameCtrl: FormControl;
  usernameCtrl: FormControl;
  passwordCtrl: FormControl;
  confirmPasswordCtrl: FormControl;
  birthYearCtrl: FormControl;
  mobileNumberCtrl: FormControl;
  
  static passwordMatch(control: FormGroup) {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;
    return password !== confirmPassword ? {
      matchingError: true
    } : null;
  }

  static validYear(control: FormControl) {
    const birthYear = control.value;
    return Number.isNaN(birthYear) ||
      birthYear < 1900 ||
      birthYear > new Date().getFullYear() ? {
        invalidYear: true
      } : null;
  }

  constructor(private fb: FormBuilder, private router: Router,
    private userService: UserService) {}

  ngOnInit() {
    this.nameCtrl = this.fb.control('', Validators.compose([
      Validators.required,
      Validators.minLength(3)
    ]));
    this.usernameCtrl = this.fb.control('', Validators.compose([
      Validators.required,
      Validators.minLength(3)
    ]));
    this.passwordCtrl = this.fb.control('', Validators.required);
    this.confirmPasswordCtrl = this.fb.control('', Validators.required);
    this.passwordForm = this.fb.group({
      password: this.passwordCtrl,
      confirmPassword: this.confirmPasswordCtrl
    }, {
      validator: RegisterComponent.passwordMatch
    });
    this.birthYearCtrl = this.fb.control('', Validators.compose([
      Validators.required,
      RegisterComponent.validYear
    ]));

    this.userForm = this.fb.group({
      name: this.nameCtrl,
      username: this.usernameCtrl,
      birthYear: this.birthYearCtrl,
      passwordForm: this.passwordForm      
    });
  }

  register() {
    this.userService.register(
      this.userForm.value.name,
      this.userForm.value.username,
      this.userForm.value.passwordForm.password,
      this.userForm.value.birthYear
    ).subscribe(
      () => this.router.navigate(['/']),
      () => this.registrationFailed = true
    );
  }
}
