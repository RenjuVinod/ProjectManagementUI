import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task'
import { GenericServiceService } from '../generic-service.service'

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService extends GenericServiceService<Task>{

  updateTaskCollection:Task;
  
  constructor(protected http :HttpClient) {
    super(http,'Tasks');
   }
}
