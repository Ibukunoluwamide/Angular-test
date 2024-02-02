import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  constructor(public router: Router){}
  msg:string = ''
  style:string = ''
  public admin: any = {
    username: "",
    password: ""
  }
  alladmins: any = []
  loginBtn() {
    if (this.admin.username && this.admin.password) {
      this.alladmins = JSON.parse(localStorage['CW-admins'])
      let findadmin = this.alladmins.find((item: any, index:number) => item.username == this.admin.username && item.password == this.admin.password )
      if (findadmin) {
        // console.log();
        console.log(findadmin);        
        localStorage.setItem("current_admin", JSON.stringify(findadmin));
        localStorage.setItem("currentAdmin_id", this.alladmins.indexOf(findadmin));
        this.msg="Login Successful!"
        this.style = "alert alert-success text-center"
        setTimeout(() => {
          this.router.navigate(['/dashboard'])
        }, 2000);
      } else {
        this.msg = "Incorrect username or password"
        this.style = "alert alert-danger text-center"
        setTimeout(() => {
          this.msg = ""
          this.style = ""
        }, 2000);
      }
    } else {
      this.msg = "Please fill out all fields"
    this.style = "alert alert-danger text-center"
    setTimeout(() => {
      this.msg = ""
      this.style = ""
    }, 2000);

    }

  }
}
