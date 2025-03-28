import { Component } from '@angular/core';
import { IconModule } from '../../modules/icon/icon.module';
@Component({
  selector: 'app-navbar',
  imports: [IconModule],
templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    icons = IconModule.icon;
}
