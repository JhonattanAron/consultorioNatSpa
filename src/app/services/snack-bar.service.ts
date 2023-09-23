import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(
    private snackvar:MatSnackBar
  ) { }

  openSnackBar(message: string, action: string) {
    this.snackvar.open(message , action);
  }
}
