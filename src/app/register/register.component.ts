import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
emp;
msg;
  constructor(public dataService:DataService, public router:Router) { }

  addData(formdata)
  {
    console.log(formdata.form.value)
    this.emp=formdata.form.value;
    this.dataService.addData(this.emp).subscribe((res)=>{
      console.log(res);
      this.msg="Record added successfully!!!"
      this.router.navigate(['home']);
    })
  }

  ngOnInit() {
  }

}
