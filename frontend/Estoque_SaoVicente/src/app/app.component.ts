import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

    
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, NavbarComponent ],
templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Estoque_SaoVicente';
}
