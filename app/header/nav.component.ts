import {Component} from '@angular/core'
import {ROUTER_DIRECTIVES} from '@angular/router'
import {Client} from 'idevjs-angular-client'

@Component({
    selector: 'idevjs-nav',
    templateUrl: 'app/header/nav.component.html',
    styleUrls: ['app/header/nav.component.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class NavComponent {
    public isLogin: boolean = false
    public user: any
    constructor(private _client: Client) {

    }
    ngOnInit() {
        // this.getUser()
    }
    getUser() {
        this._client.getSelf().subscribe(
            (res) => {
                this.isLogin = true
                this.user = res
            }
        )
    }
}