import {Component, ChangeDetectionStrategy} from '@angular/core'
import {ROUTER_DIRECTIVES} from '@angular/router'
import {TimeAgo} from 'ng2-timeago'
import {IPost} from './post'

@Component({
    selector: 'post-item',
    templateUrl: './post-item.component.html',
    styleUrls: ['./post-item.component.css'],
    directives: [ROUTER_DIRECTIVES, TimeAgo],
    inputs: ['post'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PostItemComponent {
    public post: IPost
}