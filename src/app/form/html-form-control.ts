import { Validators, FormBuilder, FormGroup, FormControl, ValidatorFn,
ValidationErrors, AsyncValidatorFn, AbstractControlOptions } from '@angular/forms';


export class HtmlFormControl extends FormControl {

  constructor(formState?: any, validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null){

      super(formState, validatorOrOpts, asyncValidator);
  }


}
