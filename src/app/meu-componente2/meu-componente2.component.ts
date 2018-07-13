import { Component, OnInit } from '@angular/core';

import { AlunosService } from '../services/alunos.service';

@Component({
  selector: 'app-meu-componente2',
  templateUrl: './meu-componente2.component.html',
  styleUrls: ['./meu-componente2.component.css']
})
export class MeuComponente2Component implements OnInit {

  nome = 'TreinaWeb';
  alunos = [];

  constructor(
    private alunosService: AlunosService
  ) {
    this.alunos = this.alunosService.getAlunos();
  }

  ngOnInit() {
  }

  handleClick(){
    alert('Hi!');
  }

}
