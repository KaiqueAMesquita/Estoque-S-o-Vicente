import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms'
import { environment } from '../../../environments/environment.development';
import { AuthenticationService } from '../../core/authentication/authentication.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  //definição de variáveis
  loginForm!: FormGroup;
  
  
  constructor(private auth: AuthenticationService, 
    private http: HttpClient, 
    private formBuilder: FormBuilder,
    private router: Router){}

  //definição de modelo do form
 

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    
  
  }


  submitForm(event: Event): void {
    const formData = this.loginForm.value;
    this.http.post(environment.API_URL+'/login', formData, {withCredentials: true})
    .subscribe((res:any)  => {
      this.auth.setToken(res.token);
      this.router.navigate(['/']);

    });
  }
  
  
}