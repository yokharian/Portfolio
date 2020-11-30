import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/shared/user.service';
import { AddExerciseFormResponse } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
})
export class SubmitFormComponent {
  options: FormGroup;
  idControl = new FormControl('', Validators.required);
  descriptionControl = new FormControl('', Validators.required);
  durationControl = new FormControl('', Validators.min(5));
  dateControl = new FormControl(
    '',
    Validators.pattern(/(\d{5,})|(\d{4}\-\d{2}\-\d{2})|(\d{4}\-\d{2}\-\d{2})/),
  );

  constructor(
    public dialog: MatDialog,
    private _USER: UserService,
    FB: FormBuilder,
    private _SNACKBAR: MatSnackBar,
  ) {
    this.options = FB.group({
      userId: this.idControl,
      description: this.descriptionControl,
      duration: this.durationControl,
      date: this.dateControl,
    });
  }

  search(): void {
    const formValues: AddExerciseFormResponse = this.options.value;
    const { _id: userId, description, duration } = formValues;
    const date =
      this.options.value.date !== ''
        ? this.options.value.date.getTime()
        : new Date().getTime();

    this._USER
      .AddExercise(userId, description, duration, date)
      .toPromise()
      .then(response => {
        console.log(response);
        const message = `${response.description} added !`;
        this._SNACKBAR.open(message, 'close', {
          duration: 5000,
        });
      })
      .catch(response => {
        console.log(response);
        this._SNACKBAR.open(response || 'ERROR', 'close', { duration: 5000 });
      });
  }
}
