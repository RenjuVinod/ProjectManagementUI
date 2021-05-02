import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectServiceService } from '../project-service.service';
import { Project } from '../project'

@Component({
  selector: 'app-project-home',
  templateUrl: './project-home.component.html',
  styleUrls: ['./project-home.component.scss']
})
export class ProjectHomeComponent implements OnInit {

  public projects : Project[] = [];

  constructor(private projectService:ProjectServiceService,private router:Router) {
    }

  ngOnInit() {
    this.projectService.getAll().subscribe((data: Project[])=>{
      console.log(data);
      this.projects = data;
    }) 
  }

  onSelected(project :Project)
  {
    this.projectService.updateProjectCollection = project;
    this.router.navigate(['ProjectUpdate']);
  }

}
