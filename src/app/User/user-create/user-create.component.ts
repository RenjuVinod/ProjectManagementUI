import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
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
  }

}
