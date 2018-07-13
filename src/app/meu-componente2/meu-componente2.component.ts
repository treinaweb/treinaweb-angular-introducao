import { Component, OnInit } from '@angular/core';

import { AlunosService } from './../services/alunos.service';
import { ProjectsService } from './../services/projects.service';



@Component({
  selector: 'app-meu-componente2',
  templateUrl: './meu-componente2.component.html',
  styleUrls: ['./meu-componente2.component.css']
})
export class MeuComponente2Component implements OnInit {

  nome = 'TreinaWeb';
  alunos = [];

  searchText = '';
  projects = [];

  constructor(
    private alunosService: AlunosService,
    private projectsService: ProjectsService
  ) { 
    this.alunos = this.alunosService.getAlunos();
  }

  ngOnInit() {
    this.projectsService.projects.subscribe(
      projects => {
        this.projects = projects;
      }
    )
  }

  handleClick(){
    alert('Hi!');
  }

  getProjects(){
    this.projectsService.getProjects(this.searchText);
  }
  

}
