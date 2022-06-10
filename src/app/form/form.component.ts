import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeModel } from '../EmployeeModel';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  employee: EmployeeModel = new EmployeeModel(" ","","",0,"","");

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onCancle(){
    this.router.navigate(["dashboard"]);
  }
 
  onSubmit(form: NgForm) {
    console.log(this.employee);
    console.log("onsubmit function is working fine")
  }
}
