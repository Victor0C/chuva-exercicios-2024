import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-toggle',
  templateUrl: './menu-toggle.component.html',
  styleUrls: ['./menu-toggle.component.scss']
})
export class MenuToggleComponent implements OnInit {
  public isOpen = false;

  constructor() { }

  public ngOnInit(): void { }

  public toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }
}
