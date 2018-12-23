import {
  Validators, FormControl, FormGroup, ValidatorFn,
  ValidationErrors, AsyncValidatorFn, AbstractControl, FormArray
} from '@angular/forms';

import { isPresent } from '../util/lang';


export class FormValidator {

  static url(control: AbstractControl): ValidationErrors {

    if (isPresent(Validators.required(control))) {
      return null;
    }

    const v: string = control.value;
    /* tslint:disable */
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(v) ? null : { 'url': true };
    /* tslint:enable */
  };



  static selectOneValidator(c: FormArray): ValidationErrors {

    const selectedValue = c.controls.map(ctrls => ctrls.value)
      .filter(val => val == true);
    return (0 === selectedValue.length) ? {
      required: true
    } : null;
  }


  static pwdMisMatchValidator(field1: string, field2: string): ValidatorFn {

    return (control: AbstractControl): ValidationErrors => {

      const f1 = control.get(field1).value;
      const f2 = control.get(field2).value;
      return (f1 !== f2) ? {
        pwdMisMatch: true
      } : null;
    }
  }
}
