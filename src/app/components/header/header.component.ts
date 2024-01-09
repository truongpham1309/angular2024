import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  languages: string = "Angular";
  menuList = [
    { id: 1, name: "Home", slug: "/home" },
    { id: 2, name: "Products", slug: "/products" },
    { id: 3, name: "Contact", slug: "/contact" },
    { id: 4, name: "Service", slug: "/service" },
    { id: 5, name: "Login", slug: "/login" },
  ];

  navigationHiddenOrShow: boolean = false;

  onClickMenu(): void {
    this.navigationHiddenOrShow = !this.navigationHiddenOrShow;
  }
}
