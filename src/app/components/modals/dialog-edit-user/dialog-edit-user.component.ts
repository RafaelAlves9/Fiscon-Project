import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertService } from 'src/app/components/modals/alert-actions/alert.service';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.css']
})
export class DialogEditUserComponent implements OnInit {
  editForm!: FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private api : ApiService,
    private dialogRef : MatDialogRef<DialogEditUserComponent>,
    @Inject (MAT_DIALOG_DATA) public data : any,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      id: [this.data.id],
      name: [this.data.name,Validators.required],
      tel: [this.data.tel,Validators.required]
    })
  }
  saveEdit(){
    if(this.editForm.valid){
      this.api.editUser(this.editForm.value)
      .subscribe({
        next:(res)=>{
          this.alert.openAlert(`O usuário ${res.name} foi editado com sucesso`, "Ok")
          this.dialogRef.close()
        }
      })
    } 
  }
}
