import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-graph',
  templateUrl: './card-graph.component.html',
  styleUrls: ['./card-graph.component.scss']
})
export class CardGraphComponent {
  @Input() graph!: string;
}
