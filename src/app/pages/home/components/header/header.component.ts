import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  exportAs: "header"
})
export class HeaderComponent implements OnInit {
  @Output() isOpen = new EventEmitter<boolean>();

  ngOnInit(): void {
  }
  sidebarIsOpen = false;

  toggleActive() {
    console.log('***********');

    this.sidebarIsOpen = !this.sidebarIsOpen
    this.isOpen.emit(this.sidebarIsOpen);
    // this.ck!.nativeElement.checked = !this.ck!.nativeElement.checked
  }
}
