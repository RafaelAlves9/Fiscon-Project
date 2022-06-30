import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  hide = true;
  userLogin!: FormGroup;
  loginError: any = undefined;
  durationInSeconds = 3;

  constructor(
    private formBuilder : FormBuilder,
    private api : ApiService,
    private router: Router,
    private alert: AlertService
    ) { }

  ngOnInit(): void {
    //input values
    this.userLogin = this.formBuilder.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    })
  }
  //seting login
  setLogin(){
    if(this.userLogin.valid){
      this.api.getRegisters()
      .subscribe({
        next:(res)=>{
          const inputValues = this.userLogin.value;
          const registed: boolean = res.some((i: any) => i.email == inputValues.email && i.password == inputValues.password);
          if (registed){
            this.loginError = false;
            localStorage.setItem('user', 'logged');
            this.alert.openAlert("Login feito com sucesso", "Ok")
            this.router.navigate(['admin']);
          } else {
            this.loginError = true
          }
      }}
    )}
  }
}

