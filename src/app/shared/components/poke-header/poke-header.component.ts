import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'poke-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './poke-header.component.html',
  styleUrls: ['./poke-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokeHeaderComponent implements OnInit {
  ngOnInit(): void {}
}
