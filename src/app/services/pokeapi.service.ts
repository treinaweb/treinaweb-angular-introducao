import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  pokeList = [
    { name: 'Bulbasaur', number: 1 },
    { name: 'Charmander', number: 4 },
    { name: 'Squirtle', number: 7 },
    { name: 'Pikachu', number: 25 }
  ]

  constructor() { }
}
