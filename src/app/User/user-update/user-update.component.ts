import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { User } from '../user'

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {

  constructor(public userService:UserServiceService,private router:Router) {
  }

  ngOnInit(): void {
  }

  onUserDelete(id : number)
  {
    this.userService.delete(id).subscribe(res=>
      {
        console.log('User deleted!');
        this.router.navigate(['User']);
    });    

  }

  onUserUpdate()
  {
    this.userService.update(this.userService.updateUserCollection).subscribe(res=>
      {
        console.log('User updated!');
        this.router.navigate(['User']);
    });
  }
}
