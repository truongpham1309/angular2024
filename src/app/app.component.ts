import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../app/components/header/header.component";
import { FooterComponent } from './components/footer/footer.component';
import { LayoutsComponent } from './components/layouts/layouts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LayoutsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
