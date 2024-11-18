import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
})
export class PokemonDetailPage implements OnInit {

  pokemon: any;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) { }

  ngOnInit() {
    const pokemonName = this.route.snapshot.paramMap.get('name');
    if (pokemonName) {
      this.pokemonService.getPokemon(pokemonName).subscribe((data) => {
        this.pokemon = data;
      });
    }
  }
}
