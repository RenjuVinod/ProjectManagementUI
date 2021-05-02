import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskServiceService } from '../task-service.service';
import { Task } from '../task'

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  public tasks : Task[] = [];

  constructor(private taskService:TaskServiceService,private router:Router) {
    }

  ngOnInit() {
    this.taskService.getAll().subscribe((data: Task[])=>{
      console.log(data);
      this.tasks = data;
    })  
  }

  onSelected(tasks :Task)
  {
    this.taskService.updateTaskCollection = tasks;
    this.router.navigate(['TaskUpdate']);
  }
  

}
