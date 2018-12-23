import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, ValidationErrors, AbstractControl } from '@angular/forms';
import { FormValidator } from '../validator/form-validator'

@Component({
  selector: 'oaas-user-add',
  templateUrl: './user-add.component.html',
  styles: []
})
export class UserAddComponent implements OnInit {

  userAddForm: FormGroup;
  submitted: boolean;
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

    },
      {
        validator: FormValidator.pwdMisMatchValidator('pwd', 'rePwd')
      });
  }

  onSubmit(): void {

    console.log(this.userAddForm);
    this.submitted = true;
    if (this.userAddForm.invalid) {
      return;
    }

    const userData = {

      name: this.userAddForm.value.uname,
      pwd: this.userAddForm.value.pwd
    }
    console.log(userData);
    console.log(JSON.stringify(userData))
  }



}
