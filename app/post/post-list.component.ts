import {Component, OnInit} from 'angular2/core'
import {PostItemComponent} from './post-item.component'
import {Post} from './post'

@Component({
    selector: 'post-list',
    templateUrl: 'app/post/post-list.component.html',
    // styleUrls: ['app/post/post-list.component.css'],
    inputs: ['posts'],
    directives: [PostItemComponent]
})

export class PostListComponent {
    public posts: Post[]
    
    constructor() {}
      
}