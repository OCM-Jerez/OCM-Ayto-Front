import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-data',
  templateUrl: './card-data.component.html',
  styleUrls: ['./card-data.component.scss']
})
export class CardDataComponent {
  @Input() data!: string;
  @Input() dataColor!: string;
  @Input() dataBackgroundColor!: string;
}
