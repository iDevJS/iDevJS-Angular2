import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES} from 'angular2/router'
import {Post} from './post'
import {DateEnhancePipe} from './timeago.pipe'

@Component({
    selector: 'user-post-item',
    templateUrl: 'app/post/user-post-item.component.html',
    styleUrls: ['app/post/post-item.component.css'],
    directives: [ROUTER_DIRECTIVES],
    pipes: [DateEnhancePipe],
    inputs: ['post']
})

export class UserPostItemComponent {
    public post: Post
}