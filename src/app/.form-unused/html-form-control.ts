import { Validators, FormBuilder, FormGroup, FormControl, ValidatorFn,
ValidationErrors, AsyncValidatorFn, AbstractControlOptions } from '@angular/forms';


import { FieldValidatorFn } from './field-validator-fn';


export class HtmlFormControl extends FormControl {

  private fieldValidatorFn: FieldValidatorFn | FieldValidatorFn[];
  private _errorMsg:string;

  // constructor(formState?: any, validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
  //   asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null){
  constructor(formState?: any, fieldValidator?: FieldValidatorFn | FieldValidatorFn[] | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null){

      // super(formState, validatorOrOpts, asyncValidator);
      console.log("---->>>HtmlFormControl loaded<<<<-----")
      super(formState);
      this.fieldValidatorFn = fieldValidator;
      if (fieldValidator) {

        this.setValidators(Array.isArray(fieldValidator)
          ?fieldValidator.map(x => x.validatorFn)
          :fieldValidator.validatorFn);
      }

      if (Array.isArray(this.fieldValidatorFn)) {

          this.fieldValidatorFn.forEach(ele => {
            // console.log(ele.validatorFn)
          })
      } else {
        console.log(this.fieldValidatorFn.validatorFn.name)
      }

      console.log("Validators.required.name");
      // console.log(Validators.);

      this.statusChanges.subscribe((status) => {

        // this.errors
        // console.log(this.errors)
        // console.log(status);
        if (this.errors) {

          console.log(this.errors)

        }


      })
      this.setValue("ehcgvkhgdfkhsagdf");
  }

get errorMsg(): string { return this._errorMsg; }


}
