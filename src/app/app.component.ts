import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from './projects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  gameProjects: Project[];
  otherProjects: Project[];

  constructor(
    private projectsService: ProjectsService
  ) { }

  ngOnInit() {
    this.gameProjects = this.projectsService.gameProjects;
    this.otherProjects = this.projectsService.otherProjects;
  }

  scroll(el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  }

}
