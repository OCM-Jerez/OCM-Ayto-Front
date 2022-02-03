import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() icon!: string;
  @Input() name!: string;
  @Input() data!: string;
  @Input() evolution!: string;
  @Input() graph!: string;
  @Input() nameColor!: string;
  @Input() nameBackgroundColor!: string;
  @Input() dataColor!: string;
  @Input() dataBackgroundColor!: string;
  @Input() evolutionColor!: string;
  @Input() evolutionBackgroundColor!: string;
}
