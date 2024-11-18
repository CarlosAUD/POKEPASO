import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
})
export class PokemonListPage {
  pokemonName: string = ''; // Nombre del Pokémon a buscar
  pokemonData: any = null; // Datos del Pokémon
  error: string | null = null;

  constructor(private pokemonService: PokemonService) {}

  searchPokemon() {
    if (this.pokemonName.trim()) {
      this.pokemonService.getPokemon(this.pokemonName.toLowerCase()).subscribe({
        next: (data) => {
          this.pokemonData = data;
          this.error = null;
        },
        error: () => {
          this.error = 'No se encontró el Pokémon';
          this.pokemonData = null;
        },
      });
    }
  }

  // Función para obtener el color del tipo de Pokémon
  getTypeColor(type: string): string {
    const typeColors: { [key: string]: string } = {
      fire: 'danger',
      water: 'primary',
      grass: 'tertiary',
      electric: 'warning',
      bug: 'light',
      poison: 'dark',
      flying: 'medium',
      psychic: 'secondary',
      ghost: 'dark',
      dragon: 'danger',
      fairy: 'tertiary',
      steel: 'light',
      rock: 'dark',
      ground: 'secondary',
      ice: 'tertiary',
      fighting: 'primary',
      normal: 'medium',
    };
  
    const typeName = type?.toLowerCase(); 
    
    return typeColors[typeName] || 'medium';
  }
}