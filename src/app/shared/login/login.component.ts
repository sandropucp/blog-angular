import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../common/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFailed: boolean;
  loginCtrl: FormControl;
  passwordCtrl: FormControl;
  userForm: FormGroup;

  authenticationFailed = false;
  constructor(private fb: FormBuilder, private userService: UserService, 
    private router: Router) {
  }

  ngOnInit() {
    this.loginCtrl = this.fb.control('', Validators.compose([
      Validators.required,
      Validators.minLength(3)
    ]));

    this.passwordCtrl = this.fb.control('', Validators.required);

    this.userForm = this.fb.group({
      login: this.loginCtrl,
      password: this.passwordCtrl
    });
  }

  authenticate() {
    this.userService.authenticate(
      this.userForm.value.login,
      this.userForm.value.password
    ).subscribe(
      () => this.router.navigate(['/']),
      () => this.authenticationFailed = true
      );
  }
}
