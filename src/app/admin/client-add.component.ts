import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, ValidationErrors, FormArray } from '@angular/forms';

import { FormValidator } from '../validator/form-validator'

@Component({
  selector: 'oaas-client-add',
  templateUrl: './client-add.component.html',
  styles: []
})
export class ClientAddComponent implements OnInit {

  clientAddForm: FormGroup;
  submitted: boolean;

  readonly grandTypes = [
    { id: 1, value: 'Code' },
    { id: 2, value: 'Impl' },
  ];

  readonly scopes = [
    { id: 1, value: 'Read' },
    { id: 2, value: 'Write' },
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.submitted = false;
    this.clientAddForm = this.formBuilder.group({
      resourceId: new FormControl('',
        [Validators.required, Validators.minLength(7), Validators.maxLength(25)]),
      clientId: new FormControl('',
        [Validators.required, Validators.minLength(7), Validators.maxLength(25)]),
      clientSec: new FormControl('',
        [Validators.required, Validators.minLength(8), Validators.maxLength(25)]),
      reClientSec: new FormControl('',
        [Validators.required, Validators.minLength(8), Validators.maxLength(25)]),
      validity: new FormControl('',
        [Validators.required, Validators.minLength(2), Validators.maxLength(5)]),
      grandType: this.buildCheckBoxControls(this.grandTypes),
      redirectUrl: new FormControl('',
        [Validators.required, Validators.minLength(7), Validators.maxLength(250), FormValidator.url]
      ),
      scopes: this.buildCheckBoxControls(this.scopes),
    },
      {
        validator: FormValidator.pwdMisMatchValidator('clientSec', 'reClientSec')
      });
    // this.clientAddForm.updateValueAndValidity

    // console.log(this.clientAddForm)
  }

  buildCheckBoxControls(lists: Array<{ id: number, value: string }>): FormArray {

    const controls = lists.map(val => new FormControl(false))
    return this.formBuilder.array(controls, [FormValidator.selectOneValidator.bind(controls)]);
  }
  get f() { return this.clientAddForm }

  onSubmit(): void {

    this.submitted = true;
    if (this.clientAddForm.invalid) {
      return;
    }

    const grandType = this.clientAddForm.value.grandType.map(
      (val,i) => (val)? this.grandTypes[i].id: false).filter(res => res);

    const scopes = this.clientAddForm.value.scopes.map(
      (val,i) => (val)? this.scopes[i].id: false).filter(res => res);

    const clientData = {

      clientId: this.clientAddForm.value.clientId,
      clientSec: this.clientAddForm.value.clientSec,
      grandType: grandType,
      redirectUrl: this.clientAddForm.value.redirectUrl,
      resourceId: this.clientAddForm.value.resourceId,
      scopes: scopes,
      validity: this.clientAddForm.value.validity,
    }
    console.log(clientData);
    console.log(JSON.stringify(clientData));
  }

}
