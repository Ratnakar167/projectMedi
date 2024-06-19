import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HearderComponent } from '../hearder/hearder.component';
 import { FooterComponent } from '../footer/footer.component';
import { FooterButtonsComponent } from '../footer-buttons/footer-buttons.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterOutlet,FooterButtonsComponent,HearderComponent,FooterComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {

}
