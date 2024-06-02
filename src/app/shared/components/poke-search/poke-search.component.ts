import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  type OnInit,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'poke-search',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokeSearchComponent implements OnInit {
  @Output()
  public emmitSearch: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {}

  setSearch(value: string) {
    this.emmitSearch.emit(value);
  }
}
