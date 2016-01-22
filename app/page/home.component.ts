import {Component} from 'angular2/core'
import {PostListComponent} from '../post/post-list.component'
import {NavComponent} from '../header/nav.component'

@Component({
    selector: 'home-page',
    templateUrl: 'app/page/home.component.html',
    directives: [PostListComponent, NavComponent]
})

export class HomeComponent {
   public title:string = 'Let us rock'
}