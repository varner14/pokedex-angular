import { CommonModule, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PokemonService } from '../../../core/services/pokemon.service';
import { RouterModule } from '@angular/router';
import { TransformCustom } from '../../helpers/transform';

@Component({
  selector: 'poke-list',
  standalone: true,
  imports: [CommonModule, RouterModule, NgFor],
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokeListComponent {
  @Input()
  pokemon: any;

  constructor(private pokemonService: PokemonService) {}

  leadingZeros(number: number) {
    return TransformCustom.leadingZeros(number);
  }
}
