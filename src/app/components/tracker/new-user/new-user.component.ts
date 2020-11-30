import { Component, Inject } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewUserResponse } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
})
export class NewUserComponent {
  constructor(private _USER: UserService, public dialog: MatDialog) {}

  newUser(): void {
    const username = (document.querySelector('#UserName') as HTMLInputElement)
      .value;
    this._USER
      .Register(username)
      .toPromise()
      .then(response => {
        console.log(response);
        this.dialog.open(SuccesRegisterDialogComponent, {
          data: response,
        });
      })
      .catch(response => {
        console.log(response);
        this.dialog.open(SuccesRegisterDialogComponent, {
          data: response,
        });
      });
  }
}

@Component({
  selector: 'app-dialog-success',
  templateUrl: './SuccesRegisterDialog.component.html',
})
export class SuccesRegisterDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: NewUserResponse) {}
}
