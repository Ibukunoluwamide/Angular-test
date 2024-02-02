import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-admin-register',
  standalone: true,
  imports: [FormsModule, NavbarComponent],
  templateUrl: './admin-register.component.html',
  styleUrl: './admin-register.component.css'
})
export class AdminRegisterComponent {
  constructor (public router: Router){}
  msg:string = ''
  style:string = ''
  ngOnInit(){
    localStorage['CW-Admin']?this.allAdmin=JSON.parse(localStorage['CW-Admin']):console.log('NOT Found');
    
  }
 
   public admin:any = {
    username: "",
    admin_id: "",
    email: "",
    password: ""
   }
   allAdmin:any = []

   registerBtn(){
    if (this.admin.username && this.admin.email && this.admin.admin_id  && this.admin.password) {
      console.log(this.admin);
      this.allAdmin.push(this.admin)
      localStorage.setItem("CW-admins", JSON.stringify(this.allAdmin))
      this.msg="Registration Successful!"
      this.style = "alert alert-success text-center"
      setTimeout(() => {
        this.router.navigate(['/admin-login'])
      }, 2000);
   }else{
    this.msg = "Please fill out all fields"
    this.style = "alert alert-danger text-center"
    setTimeout(() => {
      this.msg = ""
      this.style = ""
    }, 2000);
   }
   }
}
