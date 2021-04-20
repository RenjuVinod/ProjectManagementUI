import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  public users = [] as any;

  constructor() {
    this.users = [
      { id: 1, firstname: "Renju", lastname: "Vinod", email: "renju.vinod@gmail.com" },
      { id: 2, firstname: "Vinod", lastname: "Julian", email: "vinod.julian@gmail.com" }
    ]
  }

  ngOnInit(): void {
  }

  trackByuserCode(users: any): number{
    return users.id;
  }

}
