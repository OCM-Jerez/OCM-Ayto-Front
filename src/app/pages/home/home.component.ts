import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // https://medium.com/ngconf/animating-angulars-ngif-and-ngfor-32a6ff26ed2d
  // animations: [
  //   trigger(
  //     'inOutAnimation',
  //     [
  //       transition(
  //         ':enter',
  //         [
  //           style({ transform: 'translateX(-200px)' }),
  //           animate('0.2s ease-out',
  //             style({ transform: 'translateX(0)' }))
  //         ]
  //       ),
  //       transition(
  //         ':leave',
  //         [
  //           style({ transform: 'translateX(0)' }),
  //           animate('0.5s ease-out',
  //             style({ transform: 'translateX(-200px)' }))
  //         ]
  //       )
  //     ]
  //   )
  // ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // sidebarIsOpen = false;
  // isOpen(open: boolean): void {
  //   this.sidebarIsOpen = open;
  // }
}
