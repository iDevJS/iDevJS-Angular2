import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES} from 'angular2/router'
import {Post} from './post'
import {TimeAgo} from '../pipes/timeago'

@Component({
    selector: 'post-item',
    templateUrl: 'app/post/post-item.component.html',
    styleUrls: ['app/post/post-item.component.css'],
    directives: [ROUTER_DIRECTIVES, TimeAgo],
    inputs: ['post']
})

export class PostItemComponent {
    public post: Post
}