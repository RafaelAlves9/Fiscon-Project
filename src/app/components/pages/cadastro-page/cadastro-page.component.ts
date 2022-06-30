import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cadastro-page',
  templateUrl: './cadastro-page.component.html',
  styleUrls: ['./cadastro-page.component.css']
})
export class CadastroPageComponent implements OnInit {
  hide = false
  userLogin!: FormGroup;

  constructor (
    private formBuilder : FormBuilder,
    private api : ApiService,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
    //input values
    this.userLogin = this.formBuilder.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    })
  }
  //verifing existed users and creating new user
  verifyUser(){
    if(this.userLogin.valid){
      this.api.getRegisters()
      .subscribe({
        next:(res)=>{
          const inputValues = this.userLogin.value;
          const registed: boolean = res.some((i: any) => i.email === inputValues.email);
          if(registed){
            this.alert.openAlert(`O email ${inputValues.email} já está cadastrado em outra conta.`, "Ok");
          } else{
            this.api.postRegister(inputValues)
            .subscribe({
              next:()=>{
                this.alert.openAlert("Conta criada com sucesso!", "Ok");
              }
            })
          }
        }
      })
    }
  }
}
