import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor( private alert: MatSnackBar ) { }

  openAlert(messenge: string, button: string) {
    this.alert.open( messenge, button, {
      duration: 5000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    }
    )
  }
}
