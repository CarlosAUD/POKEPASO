import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  // Obtener detalles de un Pokémon por nombre
  getPokemon(name: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${name}`);
  }
}
