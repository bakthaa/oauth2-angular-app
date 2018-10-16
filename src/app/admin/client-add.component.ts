import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray, ValidatorFn, AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HtmlFormControl } from './../form/html-form-control';
import { FormUtil, BoxOption } from './../util/form-util';


@Component({
  selector: 'oaas-client-add',
  templateUrl: './client-add.component.html',
  styles: [
    '.invalid {width: 100%;margin-top: .25rem;font-size: 80%;color: #dc3545;}'
  ]
})
export class ClientAddComponent implements OnInit, OnDestroy {

  private clientAddForm: FormGroup;
  private submitted: boolean;

  private reClientSec$:Subscription;

  private grantTypes: Array<BoxOption> = [

    { name: 'Code', value: '1', selected: true },
    { name: 'implement', value: '2', selected: false },
  ];

  scopes: Array<BoxOption> = [

    { name: 'Read', value: '1', selected: true },
    { name: 'Write', value: '2', selected: false },
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
        [Validators.required, Validators.maxLength(6), Validators.pattern(FormUtil.REGEX_NUMBER_ONLY)]),
      grantTypes: this.buildFormArray(this.grantTypes),
      fwdURL: new FormControl('',
        [Validators.required, Validators.maxLength(250), Validators.pattern(FormUtil.REGEX_URL)]),
      scopes: this.buildFormArray(this.scopes),
    });

    this.reClientSec$ = this.clientAddForm.controls.reClientSec.valueChanges.subscribe(val => {

      if(val !== this.clientAddForm.controls.clientSec.value){

        this.clientAddForm.controls.reClientSec.setErrors({ MatchPassword: true });
      }
    });
  }

  buildFormArray(fields: Array<BoxOption>): FormArray {

    return new FormArray(fields.map(gType => new FormControl(gType.selected)), FormUtil.checkboxRequiredValidator);
  }

  onSubmit(): void {

    this.submitted = true;
    if (this.clientAddForm.invalid) {

      return;
    }
    let formData = this.clientAddForm.value;
    formData.grantTypes = this.getCheckBoxValue(this.clientAddForm.controls.grantTypes as FormArray, this.grantTypes);
    formData.scopes = this.getCheckBoxValue(this.clientAddForm.controls.scopes as FormArray, this.scopes);

    console.log(formData);
  }

  getCheckBoxValue(controlArray: FormArray, keys: Array<BoxOption>): string[] {

    return controlArray.value.map((val, i) => val ? keys[i].value : null).filter(val => null !== val);
  }

  ngOnDestroy(){

    if(this.reClientSec$){

      this.reClientSec$.unsubscribe();
    }
  }
}
