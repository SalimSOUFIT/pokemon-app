import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './moc-pokemon-list';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
     
})

export class AppComponent implements OnInit{
  pokemonList:  Pokemon[] =  POKEMONS;
  pokemonSelected: Pokemon|undefined;
  constructor(){}
  ngOnInit() {
    console.table(this.pokemonList);
  }
  selectPokemon(pokemonId: String){
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon=>pokemon.id == +pokemonId);
    if (pokemon) {
      console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Vous avez demandé un pokémon qui n'éxiste pas.`);
      this.pokemonSelected = pokemon;
    }
    
  }
}
