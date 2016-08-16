import {Component} from '@angular/core'
import {ROUTER_DIRECTIVES} from '@angular/router'
import {Client} from 'idevjs-angular-client'
import {AuthService} from '../../auth.service'

@Component({
  selector: 'idevjs-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class NavComponent {
  public isLoggedIn: boolean = false
  public user: any
  constructor(private client: Client, private auth: AuthService) {
    this.isLoggedIn = this.auth.isAuth()
  }
  ngOnInit() {
    if (this.isLoggedIn) {
      this.getUser()
    }
  }
  getUser() {
    this.client.getSelf().subscribe(
      res => {
        this.user = res
        this.isLoggedIn = true
      }
    )
  }
}