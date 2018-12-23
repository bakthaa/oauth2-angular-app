import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'oaas-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private _userActionFlag:boolean;
  private _clientActionFlag:boolean;

  get userAddToggle() { return this._userActionFlag; }

  set userAddToggle(arg: boolean) { this._userActionFlag = arg; }


  get clientAddToggle() { return this._clientActionFlag; }

  set clientAddToggle(arg: boolean) { this._clientActionFlag = arg; }

  constructor() { }

  ngOnInit() {
  }

}
