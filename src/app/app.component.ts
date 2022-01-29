import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 'OCM-Ayto-Front';
  public sidebarIsOpen = true


  toggleActive() {
    this.sidebarIsOpen = !this.sidebarIsOpen
  }


}

