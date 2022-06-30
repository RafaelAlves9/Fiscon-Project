import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef } from '@angular/material/dialog';
import { AlertService } from 'src/app/components/modals/alert-actions/alert.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  userForm!: FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private api : ApiService,
    private dialogRef : MatDialogRef<DialogComponent>,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
    //formulario
    this.userForm = this.formBuilder.group({
      name: ['',Validators.required],
      tel: ['',Validators.required],
      creationDate : [new Date(),Validators.required],
      updationDate : [''],
    })
  }
  //enviando novo produto
  saveUser(){
    if(this.userForm.valid){
      this.api.postUser(this.userForm.value)
      .subscribe({
        next:(res)=>{
          this.alert.openAlert(`O usuário ${res.name} foi adicionado com sucesso`, "Ok");
          this.userForm.reset()
          this.dialogRef.close()
        }
      })
    }}
}
