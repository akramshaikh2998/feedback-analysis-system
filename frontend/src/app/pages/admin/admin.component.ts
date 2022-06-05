import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../../public/services/auth-service/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  adminForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });


  constructor(
    private authService: AuthService,
    private router: Router


  ) { }
 admin() {
    if (!this.adminForm.valid) {
      return;
    }
    this.authService.login(this.adminForm.value).pipe(
      // route to protected/dashboard, if login was successfull
      tap(() => this.router.navigate(['../../protected/dashboard']))
    ).subscribe();
  }

}