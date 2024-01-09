import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { AdminHeaderComponent } from '../admin/admin-header/admin-header.component';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, FooterComponent, AdminHeaderComponent],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.css'
})
export class LayoutsComponent {

}
