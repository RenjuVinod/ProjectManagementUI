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

  constructor(public projectService: ProjectServiceService, private router: Router) {
  }

  ngOnInit(): void {
  }
  onProjectDelete(id: number) {
    this.projectService.delete(id).subscribe(res => {
      console.log('Project deleted!');
      this.router.navigate(['Project']);
    });

  }

  onProjectUpdate() {
    this.projectService.update(this.projectService.updateProjectCollection).subscribe(res => {
      console.log('Project updated!');
      this.router.navigate(['Project']);
    });
  }
}
