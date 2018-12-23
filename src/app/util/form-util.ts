import { FormArray, AbstractControl, ValidatorFn } from '@angular/forms';

export interface BoxOption {

  name: string;
  value: string;
  selected: boolean
}

export class FormUtil {

  static REGEX_URL: string = '^http(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?$';

  static REGEX_NUMBER_ONLY: string = '^[0-9]+$';

  static REGEX_EMAIL: string = '^[a-zA-Z0–9_.+-]+@[a-zA-Z0–9-]+.[a-zA-Z0–9-.]+$';

  static checkboxRequiredValidator: ValidatorFn = (formArray: FormArray) => {

    const totalSelected = formArray.controls.map(control => control.value)
      .reduce((acc, val) => val ? acc + 1 : acc, 0);
    return (totalSelected > 0) ? null : { required: true };
  }
}
