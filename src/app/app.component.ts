import {Component} from '@angular/core'
import {ROUTER_DIRECTIVES} from '@angular/router'
import {NavComponent} from './components/header/nav.component'

@Component({
    selector: 'idevjs-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    directives: [NavComponent, ROUTER_DIRECTIVES]
})

export class AppComponent {
    public title = 'iDevJS'
}