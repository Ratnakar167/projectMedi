import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterEvent, RouterModule } from '@angular/router';
import { FormControl,FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email:new FormControl(''),
    password:new FormControl(''),
  });

  constructor(private auth:AuthService,private router:Router){

  }
  ngOnInit() {

    }

    onSubmit():void{
      if (this.loginForm.valid) {
        this.auth.login(this.loginForm.value).subscribe(
          (result) => {
            console.log(result);
            this.router.navigate(['/admin']);
          },
          (err: Error) => {
            alert(err.message);
          }
        );
      }
    }
}
