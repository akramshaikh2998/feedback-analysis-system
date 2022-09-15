import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CustomValidators } from '../../public/custom-validator';
import { AuthService } from '../../public/services/auth-service/auth.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    name: new FormControl(null, [Validators.required]),
    number: new FormControl(null, [Validators.required]),
    branch: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    confirmPassword: new FormControl(null, [Validators.required]),
  });

  constructor(private router: Router, private authService: AuthService) {}

  register() {
    if (!this.registerForm.valid) {
      return;
    }
    this.authService
      .register(this.registerForm.value)
      .pipe(
        // If registration was successfull, then navigate to login route
        tap(() => this.router.navigate(['../login']))
      )
      .subscribe();
  }
}
