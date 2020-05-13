import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  userAuth = JSON.parse(localStorage.getItem('token-lookafter'));

  constructor(private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    console.log(this.userAuth);
    console.log('Login Access ' + JSON.stringify(this.userAuth));
    console.log('Router: ', this.router.url);

    if (this.userAuth !== null) {
      return true;
    } else {
      this.router.navigate(['/landing']);
      console.log('User null');;
    }

    console.log('Not login');
    return false;

  }
}
