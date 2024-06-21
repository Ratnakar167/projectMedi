import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-hearder',
  standalone: true,
  imports: [],
  templateUrl: './hearder.component.html',
  styleUrl: './hearder.component.scss'
})
export class HearderComponent implements OnInit {
  @Input() username: string = '';
  constructor() { }
  ngOnInit(): void {
    
  }
}
