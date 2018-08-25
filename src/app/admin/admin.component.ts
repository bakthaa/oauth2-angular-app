import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'oaas-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private userActionFlag:boolean;
  private clientActionFlag:boolean;

  showAdd(): void {
    this.userActionFlag = true;

  }
  constructor() { }

  ngOnInit() {
  }

}
