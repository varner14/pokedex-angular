import { Component, OnInit } from '@angular/core';
import { PokeHeaderComponent } from '../../shared/components/poke-header/poke-header.component';
import { Pokemon } from '../../shared/models/interface/pokemon';
import { PokemonService } from '../../core/services/pokemon.service';
import { PokeListComponent } from '../../shared/components/poke-list/poke-list.component';
import { PokeSearchComponent } from '../../shared/components/poke-search/poke-search.component';

@Component({
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [PokeHeaderComponent, PokeListComponent, PokeSearchComponent],
})
export class HomeComponent implements OnInit {
  public getAllPokemons: Pokemon[];
  private setAllPokemons: Pokemon[];

  constructor(private pokemonService: PokemonService) {
    this.setAllPokemons = [];
    this.getAllPokemons = this.setAllPokemons;
  }

  ngOnInit(): void {
    this.pokemonService.listAllPokemons().subscribe((res) => {
      this.setAllPokemons = res;
      this.getAllPokemons = this.setAllPokemons;
      console.log(this.getAllPokemons);
    });
  }

  getSearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getAllPokemons = filter;
  }
}
