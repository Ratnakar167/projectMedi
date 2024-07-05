import { Component } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Router } from '@angular/router';
import { ActivatedRoute, RouterEvent, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
