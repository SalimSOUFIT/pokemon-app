import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit{
  @Input() pokemon: Pokemon;
  types: string[];
  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ){ }
  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeListe();
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string) {
    const isChacked = ($event.target as HTMLInputElement).checked;
    if(isChacked){
      this.pokemon.types.push(type); 
    }else{
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }
  isTypesValid(type: string): boolean {//bloquer ou débloquer les checkbox dynamiquement 
    if(this.pokemon.types.length == 1 && this.hasType(type)) {//si l'utilisateur a coché une seul case, il faut l'empécher de désselectionner la case  
      return false;
    }
      
    if(this.pokemon.types.length > 2 && !this.hasType(type)) {//si l'utilisateur a déja coché 3 case
      return false ;
    }
    return true; 
  }
  onSubmit(){
    console.log('Submit form !');
    this.router.navigate(['/pokemon', this.pokemon.id]);

  }
}
