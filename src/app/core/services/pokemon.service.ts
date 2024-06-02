import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, mergeMap, tap } from 'rxjs';
import { Pokemon } from '../../shared/models/interface/pokemon';

interface IResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/';
  private listOfPokemons = 151;
  private allPokemonsUrl = `${this.baseUrl}/pokemon?limit=${this.listOfPokemons}/`;

  constructor(private httpClient: HttpClient) {}

  listAllPokemons(): Observable<Pokemon[]> {
    return this.httpClient.get<IResponse>(this.allPokemonsUrl).pipe(
      mergeMap((res) => {
        return forkJoin(
          res.results.map((resPokemons: Pokemon) => {
            return this.apiGetPokemons(resPokemons.url).pipe(
              map((resposta) => {
                if (resPokemons.name == 'nidoran-f') {
                  resPokemons.name = 'nidoran_f';
                }
                if (resPokemons.name == 'nidoran-m') {
                  resPokemons.name = 'nidoran_m';
                }
                if (resPokemons.name == 'mr-mime') {
                  resPokemons.name = 'mr.mime';
                }
                resPokemons.id = resposta.id;
                resPokemons.types = resposta.types;
                resPokemons.stats = resposta.stats;
                resPokemons.abilities = resposta.abilities;
                return resPokemons;
              })
            );
          })
        );
      })
    );
  }

  public apiGetPokemons(url: string): Observable<any> {
    return this.httpClient.get<Pokemon>(url).pipe(map((res) => res));
  }

  public getTypeRelations(url: string): Observable<any> {
    return this.httpClient.get<any>(url).pipe(map((res) => res));
  }

  public onLoadMore() {
    this.listOfPokemons += 151;
  }
}
