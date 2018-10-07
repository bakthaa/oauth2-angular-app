import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'oaas-user-add',
  templateUrl: './user-add.component.html',
  styles: []
})
export class UserAddComponent implements OnInit {

  userAddForm: FormGroup;
  submitted:boolean;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.submitted = false;
    this.userAddForm = this.formBuilder.group({
      uname: new FormControl('',
        [Validators.required, Validators.minLength(7), Validators.maxLength(25)]),
      pwd: new FormControl('',
        [Validators.required, Validators.minLength(8), Validators.maxLength(25)]),
      rePwd: new FormControl('',
        [Validators.required, Validators.minLength(8), Validators.maxLength(25)])

    });
  }

  onSubmit():void {

    console.log(this.userAddForm.value);
    this.submitted = true;
    if (this.userAddForm.invalid) {
           return;
       }
  }

}
