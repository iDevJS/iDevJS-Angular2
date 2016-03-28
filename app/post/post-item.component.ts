import {Component, ChangeDetectionStrategy} from 'angular2/core'
import {ROUTER_DIRECTIVES} from 'angular2/router'
import {TimeAgo} from 'ng2-timeago/timeago'
import {Post} from './post'

@Component({
    selector: 'post-item',
    templateUrl: 'app/post/post-item.component.html',
    styleUrls: ['app/post/post-item.component.css'],
    directives: [ROUTER_DIRECTIVES, TimeAgo],
    inputs: ['post'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PostItemComponent {
    public post: Post
}