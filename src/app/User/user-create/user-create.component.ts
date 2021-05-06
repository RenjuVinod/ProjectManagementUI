import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { NgForm } from '@angular/forms';
import { User } from '../user'

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})

export class UserCreateComponent implements OnInit {

  constructor(private userService:UserServiceService,private router:Router) {
  }

  ngOnInit(): void {
    if(!localStorage.getItem('token'))
    {
      this.router.navigate(['Login']);
    }
  }

  onAddUser(userdata : NgForm)
  {
      this.userService.create(userdata.value).subscribe(res =>{ 
        console.log('User created!')
      this.router.navigate(['User']);
    });
      
  }
}
