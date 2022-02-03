import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-name',
  templateUrl: './card-name.component.html',
  styleUrls: ['./card-name.component.scss']
})
export class CardNameComponent {
  @Input() name!: string;
  @Input() nameColor!: string;
  @Input() nameBackgroundColor!: string;


}
