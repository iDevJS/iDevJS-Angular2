import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core'
import {PostItemComponent} from './post-item.component'
import {IPost} from './post'

@Component({
    selector: 'post-list',
    templateUrl: './post-list.component.html',
    // styleUrls: ['./post-list.component.css'],
    inputs: ['posts'],
    directives: [PostItemComponent],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PostListComponent {
    public posts: IPost[]

    constructor() { }

}