import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogData } from 'src/app/model/DialogData';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {

  loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<UserLoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.dialogRef.close()
      this.router.navigate([this.data.navigatePath]);
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
