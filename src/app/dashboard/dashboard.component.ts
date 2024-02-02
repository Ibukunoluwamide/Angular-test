import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(public activate: ActivatedRoute) {}
  
  allStudents:any =[]
  studentId:any = ''
 ngOnInit(){
  this.allStudents =JSON.parse(localStorage['CW-Students'])
  console.log(this.allStudents);
  
}
 public user:any = {
   firstname: '',
  lastname: '',
  email: '',
  student_id :''
}

deleteBtn(){
  console.log(this.activate.snapshot.params['id']);
  this.studentId = this.activate.snapshot.params['id']
  if (confirm("Are you sure")) {
    this.allStudents.splice(this.studentId,1)
    localStorage.setItem("CW-Students", JSON.stringify(this.allStudents))
    window.location.reload()
  }
  
}

editBtn(){
  this.studentId = this.activate.snapshot.params['id']
  for (let index = 0; index < this.allStudents.length; index++) {
    this.user.firstname = this.allStudents[this.studentId].firstname
    this.user.lastname = this.allStudents[this.studentId].lastname
    this.user.email= this.allStudents[this.studentId].email
    this.user.student_id = this.allStudents[this.studentId].student_id
  }
  
}
updateBtn(){
  this.allStudents.splice(this.studentId,1, this.user)
  localStorage.setItem("CW-Students", JSON.stringify(this.allStudents))
  window.location.reload()
}
}

