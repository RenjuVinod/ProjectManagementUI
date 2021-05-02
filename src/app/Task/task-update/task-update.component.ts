import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskServiceService } from '../task-service.service';
import { Task } from '../task'

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.scss']
})
export class TaskUpdateComponent implements OnInit {

  constructor(private taskService:TaskServiceService,private router:Router) {
  }

  ngOnInit(): void {
  }

}
