import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from './projects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  projects: Project[];

  constructor(
    private projectsService: ProjectsService
  ) { }

  ngOnInit() {
    this.projects = this.projectsService.projects;
  }

}
