import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  public tasks = [] as any;

  constructor() {
    this.tasks = [
      { id: 1, projectid: 1, userid: 1, details: "Task 1", status: "New" },
      { id: 2, projectid: 2, userid: 2, details: "Task 2", status: "InProgress" }
    ]
  }

  ngOnInit(): void {
  }

  trackBytaskCode(tasks: any): number{
    return tasks.id;
  }

}
