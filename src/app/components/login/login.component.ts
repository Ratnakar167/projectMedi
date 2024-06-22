import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterEvent, RouterModule } from '@angular/router';
import { FormControl,FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { RestserviceService } from '../../services/restservice.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private auth:AuthService,private router:Router,private toastr: ToastrService){

  }
  ngOnInit() {
   // this.showSuccess();
    }

    onSubmit():void{
      if (this.loginForm.valid) {
        this.auth.login(this.loginForm.value).subscribe(
          (result:any) => {
           // this.toastr.success('Welcome', 'Login Successfully!');
          },
          (err: Error) => {
            this.toastr.error('Login Failed', 'Email and Password Invalid!');
          }
        );
      }
    }
}
