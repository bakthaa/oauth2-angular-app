import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HtmlFormControl } from './../form/html-form-control';


@Component({
  selector: 'oaas-client-add',
  templateUrl: './client-add.component.html',
  styles: []
})
export class ClientAddComponent implements OnInit {

  clientAddForm: FormGroup;
  submitted: boolean;

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
        [Validators.required, Validators.maxLength(6), Validators.pattern('^[0-9]+$')])

    });
    // this.clientAddForm.updateValueAndValidity

    console.log(this.clientAddForm)
  }

  onSubmit(): void {

    console.log(this.clientAddForm.value);
    this.submitted = true;
    if (this.clientAddForm.invalid) {
      return;
    }
  }

}
