import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username : string; 
    welcomeuser :string;

  constructor(private userService:UserServiceService,
    private router:Router) { }
    
   ngOnInit(): void {
  }

    onLogin(loginForm : NgForm)
    {        
      console.log(loginForm.value);

      this.userService.login(loginForm.value).subscribe(
         res=>{this.username =res.email; this.welcomeuser=res.firstName +" "+res.lastName;      
         if(this.username != null)
         {
           localStorage.setItem('token',this.welcomeuser); 
           this.router.navigate(['Home']);
         }
        }       
      );    
    }

}
