import {Component} from 'angular2/core'
import {PostListComponent} from '../posts/post-list.component'
import {Nav} from '../header/nav.component'

@Component({
    selector: 'home-page',
    templateUrl: 'app/page/home.component.html',
    directives: [PostListComponent, Nav]
})

export class HomeComponent {
   public title:string = 'Let us rock'
}