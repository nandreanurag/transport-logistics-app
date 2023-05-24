import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogData } from 'src/app/model/DialogData';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registrationForm!: FormGroup;
  userDto!: User
  nationalities: string[] = ['Nationality 1', 'Nationality 2', 'Nationality 3']; // Replace with your actual list of nationalities
  selectedValue = "None"
  constructor(
    private dialogRef: MatDialogRef<RegisterComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private router: Router,
    private userService: UserService
  ) {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      nationality: ['', Validators.required],
      passportNumber: ['', Validators.required],
      permanentAddress: ['', Validators.required],
      personalIdentificationNumber: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registrationForm.invalid) {
      return;
    }
    const user: User = this.registrationForm.value;
    console.log(user)
    this.userService
      .createUser(user)
      .subscribe((u: User) => {
        this.userDto = u;
        console.log(this.userDto);
      });
    this.dialogRef.close()
    this.router.navigate([this.data.navigatePath]);
    // this.dialogRef.close();
  }

  onNoClick() {
    console.log(this.registrationForm)
    this.dialogRef.close();
  }
}
