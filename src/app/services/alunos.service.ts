import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor() { }

  getAlunos(){
    return [
      {nome: 'Maria Silva'},
      {nome: 'Marcos Souza'},
      {nome: 'Karina Lemes'}
    ]
  }

}
