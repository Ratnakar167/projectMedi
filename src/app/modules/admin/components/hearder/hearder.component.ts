import { Component,Input,OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-hearder',
  standalone: true,
  imports: [],
  templateUrl: './hearder.component.html',
  styleUrl: './hearder.component.scss'
})
export class HearderComponent implements OnInit {
  username: string | null = null;
  constructor(private authService: AuthService) { }
  ngOnInit() {
    console.log('HearderComponent',this.username);  
    this.authService.username$.subscribe(username => (this.username = username));
  }
}
