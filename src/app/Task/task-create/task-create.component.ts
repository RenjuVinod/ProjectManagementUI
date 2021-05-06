import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskServiceService } from '../task-service.service';
import { Task } from '../task'
import { UserServiceService } from '../../User/user-service.service';
import { User } from '../../User/user'
import { ProjectServiceService } from '../../Project/project-service.service';
import { Project } from '../../Project/project'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss']
})
export class TaskCreateComponent implements OnInit {

  public listStatus = [] as any;
  public projects : Project[] = [];
  public users : User[] = [];

  constructor(public taskService:TaskServiceService,public userService:UserServiceService,public projectService:ProjectServiceService,private router:Router) {
    this.listStatus=[{id:0,statusname : "New"},
    {id:1,statusname : "InProgress"},
    {id:2,statusname : "QA"},
    {id:3,statusname : "Completed"},];  
  }

  ngOnInit() {
    this.projectService.getAll().subscribe((data: Project[])=>{
      console.log(data);
      this.projects = data;
    });

    this.userService.getAll().subscribe((data: User[])=>{
      console.log(data);
      this.users = data;
    });
  }
  onAddTask(taskdata : NgForm)
  {
    console.log(taskdata.value);

    var task=taskdata.value as Task;
    task.status=0;
    task.createdOn=new Date();

    console.log(task);
      this.taskService.create(task).subscribe(res =>{ 
        console.log('Task created!')
      this.router.navigate(['Task']);
    });
      
  }
}
