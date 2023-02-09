import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-add-pokemon',
  template: `
     <h2 class="center">
      Ajouter un pokémon
    </h2>
    <p *ngIf="pokemon" class="center">
      <img [src]="pokemon.picture" alt="">
    </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,

})
export class AddPokemonComponent implements OnInit{
  pokemon: Pokemon;
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ){

  }
  ngOnInit() {    
    this.pokemon = new Pokemon();
  }
  }
