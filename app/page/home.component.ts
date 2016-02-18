import {Component} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {PostListComponent} from '../post/post-list.component'
import {NavComponent} from '../header/nav.component'

@Component({
    selector: 'home-page',
    templateUrl: 'app/page/home.component.html',
    directives: [PostListComponent, NavComponent, ROUTER_DIRECTIVES]
})

export class HomeComponent {
   public title:string = 'Let us rock'
}