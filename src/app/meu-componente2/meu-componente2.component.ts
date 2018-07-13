import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AlunosService } from './../services/alunos.service';


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
    private http: HttpClient
  ) { 
    this.alunos = this.alunosService.getAlunos();
  }

  ngOnInit() {
  }

  handleClick(){
    alert('Hi!');
  }

  getProjects(){
    if(this.searchText){
      const url = `https://api.github.com/search/repositories?q=${this.searchText}`;

      this.http.get(url)
        .subscribe(
          response => {
            this.projects = response['items'];
          }
        )
    }
  }

}
