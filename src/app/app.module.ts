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

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path : '', component : LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'User', component: UserHomeComponent },
  { path: 'User/home', component: UserHomeComponent },
  { path: 'User/create', component: UserCreateComponent },
  { path: 'User/update/:productId', component: UserUpdateComponent },
  { path: 'Project', component: ProjectHomeComponent },
  { path: 'Project/home', component: ProjectHomeComponent },
  { path: 'Project/create', component: ProjectCreateComponent },
  { path: 'Project/update/:productId', component: ProjectUpdateComponent },
  { path: 'Task', component: TaskHomeComponent },
  { path: 'Task/home', component: TaskHomeComponent },
  { path: 'Task/create', component: TaskCreateComponent },
  { path: 'Task/update/:productId', component: TaskUpdateComponent } 
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
    RouterModule.forRoot(routes),FormsModule,HttpClientModule],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
