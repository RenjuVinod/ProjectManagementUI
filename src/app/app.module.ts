import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { AppComponent } from './app.component';
import { TaskUpdateComponent } from './Task/task-update/task-update.component';
import { TaskCreateComponent } from './Task/task-create/task-create.component';
import { TaskHomeComponent } from './Task/task-home/task-home.component';
import { ProjectHomeComponent } from './Project/project-home/project-home.component';
import { ProjectCreateComponent } from './Project/project-create/project-create.component';
import { ProjectUpdateComponent } from './Project/project-update/project-update.component';
import { UserUpdateComponent } from './User/user-update/user-update.component';
import { UserCreateComponent } from './User/user-create/user-create.component';
import { UserHomeComponent } from './User/user-home/user-home.component';
import { LoginComponent } from './User/login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'User', component: UserHomeComponent },
  { path: 'UserCreate', component: UserCreateComponent },
  { path: 'UserUpdate', component: UserUpdateComponent },
  { path: 'Project', component: ProjectHomeComponent },
  { path: 'ProjectCreate', component: ProjectCreateComponent },
  { path: 'ProjectUpdate', component: ProjectUpdateComponent },
  { path: 'Task', component: TaskHomeComponent },
  { path: 'TaskCreate', component: TaskCreateComponent },
  { path: 'TaskUpdate', component: TaskUpdateComponent } 
];

@NgModule({
  declarations: [
    AppComponent,
    TaskUpdateComponent,
    TaskCreateComponent,
    TaskHomeComponent,
    ProjectHomeComponent,
    ProjectCreateComponent,
    ProjectUpdateComponent,
    UserUpdateComponent,
    UserCreateComponent,
    UserHomeComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),FormsModule,HttpClientModule,NgbModule],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
