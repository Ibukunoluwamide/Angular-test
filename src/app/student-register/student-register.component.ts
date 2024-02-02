import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-register.component.html',
  styleUrl: './student-register.component.css'
})
export class StudentRegisterComponent {
  ngOnInit(){
    localStorage['CW-Students']?this.allStudents=JSON.parse(localStorage['CW-Students']):console.log('NOT Found');
    
  }
  msg:string = ''
  style:string = ''
   public student:any = {
    firstname: "",
    lastname: "",
    email: "",
    student_id: "",
    password: ""
   }
   allStudents:any = []

   registerBtn(){
     if (this.student.firstname && this.student.lastname && this.student.email && this.student.student_id  && this.student.password) {
      console.log(this.student);
      this.allStudents.push(this.student)
      localStorage.setItem("CW-Students", JSON.stringify(this.allStudents))
      this.msg="Registration Successful!"
      this.style = "alert alert-success text-center"
      this.student.firstname= "",
      this.student.lastname= "",
      this.student.email= "",
      this.student.student_id= "",
      this.student.password= ""
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
