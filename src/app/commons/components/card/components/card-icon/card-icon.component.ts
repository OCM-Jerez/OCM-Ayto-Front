import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-icon',
  templateUrl: './card-icon.component.html',
  styleUrls: ['./card-icon.component.scss']
})
export class CardIconComponent {
  @Input() icon!: string;
}
