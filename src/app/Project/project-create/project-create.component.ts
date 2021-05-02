import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectServiceService } from '../project-service.service';
import { Project } from '../project'

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {

  constructor(private projectService:ProjectServiceService,private router:Router) {
  }

  ngOnInit(): void {
  }

}
