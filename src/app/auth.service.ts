import { Injectable } from '@angular/core'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/delay'

@Injectable()
export class AuthService {
  private isLoggedIn: boolean = false
  public redirectUrl: string

  constructor() {
    this.isLoggedIn = !!localStorage.getItem('idevjs_token')
  }
  login() {
    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true)
  }
  logout() {
    this.isLoggedIn = false
    localStorage.setItem('idevjs_token', '')
  }
  isAuth() {
    return this.isLoggedIn
  }
}