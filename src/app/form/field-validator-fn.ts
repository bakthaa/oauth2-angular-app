import { Validators, FormBuilder, FormGroup, FormControl, ValidatorFn,
ValidationErrors, AsyncValidatorFn, AbstractControlOptions } from '@angular/forms';

export interface FieldValidatorFn {

  validatorFn:ValidatorFn;
  errorText: string;
}
