import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild("myCheckbox") ck: ElementRef | undefined;
  public sidebarIsOpen = true

  toggleActive() {
    this.sidebarIsOpen = !this.sidebarIsOpen
    this.ck!.nativeElement.checked = !this.ck!.nativeElement.checked
  }

  // onCheckboxChange(e: any) {
  //   if (e.target.checked) {
  //     this.sidebarIsOpen = !this.sidebarIsOpen
  //   } else {
  //     this.sidebarIsOpen = !this.sidebarIsOpen
  //   }
  // }

}

