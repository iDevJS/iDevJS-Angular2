import {Component, ChangeDetectionStrategy} from '@angular/core'
import {ROUTER_DIRECTIVES} from '@angular/router'
import {TimeAgo} from 'ng2-timeago'
import {IPost} from './post'

@Component({
    selector: 'user-post-item',
    templateUrl: './user-post-item.component.html',
    styleUrls: ['./post-item.component.css'],
    directives: [ROUTER_DIRECTIVES, TimeAgo],
    inputs: ['post'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class UserPostItemComponent {
    public post: IPost
}