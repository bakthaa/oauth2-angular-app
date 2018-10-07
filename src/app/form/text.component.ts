import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'oaas-text',
  template: `
  <div class="{{rowClass}}" [formGroup]="group">
    <label class="col-sm-4 col-form-label form-control-sm">{{labelTxt}}</label>
    <div class="col-sm-8">
      <input formControlName="{{name}}"
          type="text" class="form-control form-control-sm" placeholder="{{placeholder}}"
          [ngClass]="{ 'is-invalid': group.controls[name].status }"

          >
    </div>

  </div>

  `,
  styles: []
})
export class TextComponent implements OnInit, AfterViewInit {

  @Input() rowClass: string = 'row';
  @Input() labelTxt: string = '';
  @Input() name: string;
  @Input() placeholder: string = '';

  formControl:{};
  @Input() group: FormGroup;





  constructor() { }

  ngOnInit() {

    this.formControl = this.group.controls[this.name];
    console.log("abcd");
    console.log(this.formControl);
  }

  ngAfterViewInit(){
    console.log(this.labelTxt);
    console.log(this.group);


  }


  // <div class="form-group row">
  //   <label class="col-sm-4 col-form-label form-control-sm">Uname: (Min 7)</label>
  //   <div class="col-sm-8">
  //     <input formControlName="uname"
  //       type="text" class="form-control form-control-sm" placeholder="User Name"
  //       [ngClass]="{ 'is-invalid': userAddForm.controls.uname.errors }" >
  //       <div *ngIf="submitted || (userAddForm.controls.uname.errors
  //         && userAddForm.controls.uname.touched)" class="invalid-feedback">
  //         <div *ngIf="userAddForm.controls.uname.errors.required">User Name is required</div>
  //         <div *ngIf="userAddForm.controls.uname.errors.minlength">Atleast 7 char</div>
  //         <div *ngIf="userAddForm.controls.uname.errors.maxlength">Exceeded 25 char</div>
  //       </div>
  //   </div>
  // </div>

  hasError(): boolean {

    return true; //(this.formControl)? this.formControl.invalid : false;
  }
}
