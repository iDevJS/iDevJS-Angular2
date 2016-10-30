import { Injectable } from '@angular/core'
import {
  CanActivate, CanActivateChild, CanLoad,
  Router, Route,
  ActivatedRouteSnapshot, RouterStateSnapshot, NavigationExtras
} from '@angular/router'
import { AuthService } from './auth.service'

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url
    return this.checkLogin(url)
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state)
  }

  canLoad(route: Route): boolean {
    let url = `/${route.path}`;

    return this.checkLogin(url);
  }

  checkLogin(url: string) {
    if (this.authService.isAuth()) {
      return true
    }
    this.authService.redirectUrl = url

    let sessionId = 123456789

    let navigationExtras: NavigationExtras = {
      queryParams: { 'session_id': sessionId },
      fragment: 'anchor'
    }

    this.router.navigate(['/login'], navigationExtras)
    return false
  }
}