import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  @ViewChild("myCheckbox") ck: ElementRef | undefined;
  public sidebarIsOpen = true

  toggleActive() {
    this.sidebarIsOpen = !this.sidebarIsOpen
    this.ck!.nativeElement.checked = !this.ck!.nativeElement.checked
  }

  DashboardIngresos() {
    this.router.navigate(["DashboardIngresos"]);

  }

  // onCheckboxChange(e: any) {
  //   if (e.target.checked) {
  //     this.sidebarIsOpen = !this.sidebarIsOpen
  //   } else {
  //     this.sidebarIsOpen = !this.sidebarIsOpen
  //   }
  // }

}
