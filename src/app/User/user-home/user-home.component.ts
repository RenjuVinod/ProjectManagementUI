import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { User } from '../user'

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  public users : User[] = [];

  constructor(private userService:UserServiceService,private router:Router) {
    }

  ngOnInit() {
    this.userService.getAll().subscribe((data: User[])=>{
      console.log(data);
      this.users = data;
    })  
  }

  onSelected(users :User)
  {
    this.userService.updateUserCollection = users;
    this.router.navigate(['UserUpdate']);
  }
}
