import { Observable, of, throwError } from 'rxjs';
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { RestserviceService } from './restservice.service';
import { error } from 'console';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private localStorageAvailable: boolean;
  private usernameSubject = new BehaviorSubject<string | null>(null);
  username$ = this.usernameSubject.asObservable();
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private restservice: RestserviceService,
    private toastr: ToastrService
  ) {
    this.localStorageAvailable = isPlatformBrowser(this.platformId);
  }
  
  private getLocalStorage(): Storage | null {
    if (this.localStorageAvailable) {
      return localStorage;
    }
    return null;
  }

  setToken(token: string): void {
    const localStorage = this.getLocalStorage();
    if (localStorage) {
      localStorage.setItem('token', token);
    }
  }

  getToken(): string | null {
    const localStorage = this.getLocalStorage();
    return localStorage ? localStorage.getItem('token') : null;
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    const localStorage = this.getLocalStorage();
    if (localStorage) {
      localStorage.removeItem('token');
    }
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {
    const data = {
      email_id: email,
      password: password
    };
    this.restservice.post('/userAPi/login/', data).subscribe(
      (result: any) => {
        this.toastr.success('Welcome', 'Login Successfully!');
        this.usernameSubject.next(result.employee_name);
        this.setToken('abcdefghijklmnopqrstuvwxyz');
        this.router.navigate(['/home']);
        return of({ name: 'Tarique Akhtar', email: 'admin@gmail.com' });
      },
      (error: Error) => {
        this.toastr.error('Login Failed', 'Email and Password Invalid!');
      }
    );
    return of({});
   // return throwError(new Error('Failed to login'));
    // if (email === 'admin@gmail.com' && password === 'admin123') {
    //   this.setToken('abcdefghijklmnopqrstuvwxyz');
    //   return of({ name: 'Tarique Akhtar', email: 'admin@gmail.com' });
    // }
    // return throwError(new Error('Failed to login'));
  }
}
