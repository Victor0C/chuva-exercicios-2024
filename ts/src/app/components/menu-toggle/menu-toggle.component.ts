import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-toggle',
  templateUrl: './menu-toggle.component.html',
  styleUrls: ['./menu-toggle.component.scss']
})
export class MenuToggleComponent implements OnInit {
  isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

}
