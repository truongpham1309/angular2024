import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet, AdminHeaderComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

  // constructor(private router: Router){}
  // ngOnInit(): void {
  //   const token = localStorage.getItem('token');
  //   if(!token) this.router.navigate(['/login']);
  // }

}
