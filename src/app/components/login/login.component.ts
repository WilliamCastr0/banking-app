import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule, Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { AuthnService } from '../../auth/authn.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authnService: AuthnService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authnService.login(this.loginForm.getRawValue()).subscribe({
        next: (token) => {
          const tokenString = JSON.stringify(token);
          const startIndex = tokenString.indexOf(':');
          const endIndex = tokenString.indexOf('}');
          const tokenValueString = tokenString.substring(
            startIndex + 2,
            endIndex - 1
          );
          localStorage.setItem('accessToken', tokenValueString);
          this.router.navigate(['dashboard']);
        },
        error: (error) => {
          if (error.status === 400 || 404) {
            this.toastr.error('Vuelve a intentar', 'Algo ha salido mal');
          } else {
            this.toastr.error(
              'Intente más tarde.',
              'El servidor no está disponible'
            );
          }
        },
      });
    } else {
      this.toastr.error('Verifica tu info', 'Algo no está bien.');
    }
  }
}
