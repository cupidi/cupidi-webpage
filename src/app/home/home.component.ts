import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '../projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects: Project[];

  constructor(
    private projectsService: ProjectsService
  ) { }

  ngOnInit() {
    this.projects = this.projectsService.projects;
  }

}
