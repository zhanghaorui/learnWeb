import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-test01',
  templateUrl: './test01.component.html',
  styleUrls: ['./test01.component.css']
})
export class Test01Component implements OnInit {


  validateForm: FormGroup;

  constructor( private fb: FormBuilder) { 
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
    });
  }

  ngOnInit() {
  }

  doSubmit(): void {
    console.log(this.validateForm.controls)
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.controls.username.status === "INVALID"){
      alert("请重新输入");
    }
  }

}
