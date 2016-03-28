import {Component,ChangeDetectionStrategy, OnInit} from 'angular2/core'
import {UserPostItemComponent} from './user-post-item.component'
import {Post} from './post'

@Component({
    selector: 'user-post-list',
    templateUrl: 'app/post/user-post-list.component.html',
    // styleUrls: ['app/post/post-list.component.css'],
    directives: [UserPostItemComponent],
    inputs: ['posts'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class UserPostListComponent {
    public posts: Post[]
    
    constructor() {
        
    }
    
}