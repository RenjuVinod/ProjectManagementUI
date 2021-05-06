import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskServiceService } from '../task-service.service';
import { Task } from '../task'
import { UserServiceService } from '../../User/user-service.service';
import { User } from '../../User/user'
import { ProjectServiceService } from '../../Project/project-service.service';
import { Project } from '../../Project/project'

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.scss']
})
export class TaskUpdateComponent implements OnInit {

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
    if(!localStorage.getItem('token'))
    {
      this.router.navigate(['Login']);
    }
    this.projectService.getAll().subscribe((data: Project[])=>{
      console.log(data);
      this.projects = data;
    });

    this.userService.getAll().subscribe((data: User[])=>{
      console.log(data);
      this.users = data;
    });
  }

  onTaskDelete(id: number) {
    this.taskService.delete(id).subscribe(res => {
      console.log('Task deleted!');
      this.router.navigate(['Task']);
    });

  }

  onTaskUpdate() {

    this.taskService.updateTaskCollection.projectID=parseInt(this.taskService.updateTaskCollection.projectID.toString());
    this.taskService.updateTaskCollection.assignedToUserID=parseInt(this.taskService.updateTaskCollection.assignedToUserID.toString());
    this.taskService.updateTaskCollection.status=parseInt(this.taskService.updateTaskCollection.status.toString());

    this.taskService.update(this.taskService.updateTaskCollection).subscribe(res => {
      console.log('Task updated!');
      this.router.navigate(['Task']);
    });
  }
}
