import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskServiceService } from '../task-service.service';
import { Task } from '../task'

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss']
})
export class TaskCreateComponent implements OnInit {

  constructor(private taskService:TaskServiceService,private router:Router) {
  }

  ngOnInit(): void {
  }

}
