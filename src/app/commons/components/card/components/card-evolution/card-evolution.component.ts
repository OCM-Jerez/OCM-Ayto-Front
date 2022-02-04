import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-evolution',
  templateUrl: './card-evolution.component.html',
  styleUrls: ['./card-evolution.component.scss']
})
export class CardEvolutionComponent {
  @Input() evolution!: string;
  @Input() evolutionColor!: string;
  @Input() evolutionBackgroundColor!: string;

}
