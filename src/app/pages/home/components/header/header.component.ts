import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  exportAs: "header"
})
export class HeaderComponent {
  @Output() isOpen = new EventEmitter<boolean>();

  sidebarIsOpen = false;

  toggleActive() {
    this.sidebarIsOpen = !this.sidebarIsOpen
    this.isOpen.emit();
    // this.ck!.nativeElement.checked = !this.ck!.nativeElement.checked
  }
}
