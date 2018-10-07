import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'oaas-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private _userActionFlag:boolean;
  private _clientActionFlag:boolean;

  get userToggle() { return this._userActionFlag; }

  set userToggle(arg: boolean) { this._userActionFlag = arg; }


  get clientToggle() { return this._clientActionFlag; }

  set clientToggle(arg: boolean) { this._clientActionFlag = arg; }

  constructor() { }

  ngOnInit() {
  }

}
