import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './project'
import { GenericServiceService } from '../generic-service.service'

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService extends GenericServiceService<Project>{

  updateProjectCollection:Project;
  
  constructor(protected http :HttpClient) {
    super(http,'Project');
   }
}
