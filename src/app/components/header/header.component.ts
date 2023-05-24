import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserLoginComponent } from '../user-login/user-login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  

  constructor(private router: Router,private dialog: MatDialog) { }
  serviceHandler() {
    this.router.navigate(['service']);
  }
  aboutHandler() {
    this.router.navigate(['about']);
  }
  openUserLoginDialog(): void {
    const dialogRef = this.dialog.open(UserLoginComponent,{
      height: '40%',
      width: '30%',
      data:{
      title: 'User Login',
      navigatePath:'user-dashboard'
    }});
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  openAdminLoginDialog():void{
    const dialogRef = this.dialog.open(UserLoginComponent,{
      height: '40%',
      width: '30%',
      data:{
      title: 'Admin Login',
      navigatePath:'admin-dashboard'
    }});
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  openRegisterDialog(): void {
    const dialogRef = this.dialog.open(RegisterComponent,{
      height: '100%',
      width: '60%',
      data:{
      title: 'Registration Form',
      navigatePath:'user-dashboard'
    }});

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  
}
