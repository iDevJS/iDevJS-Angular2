import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core'
import {PostItemComponent} from './post-item.component'
import {IPost} from './post'

@Component({
    selector: 'post-list',
    templateUrl: 'app/post/post-list.component.html',
    styleUrls: ['app/post/post-list.component.css'],
    inputs: ['posts'],
    directives: [PostItemComponent],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PostListComponent {
    public posts: IPost[]

    constructor() { }

}