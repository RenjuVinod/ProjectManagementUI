import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectServiceService } from '../project-service.service';
import { Project } from '../project'

@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.scss']
})
export class ProjectUpdateComponent implements OnInit {

  constructor(private projectService:ProjectServiceService,private router:Router) {
  }

  ngOnInit(): void {
  }

}
