import {Component} from 'angular2/core'
import {Post} from './post'

@Component({
    selector: 'post-item',
    templateUrl: 'app/posts/post-item.component.html',
    // styleUrls: ['app/posts/post-item.component.css'],
    inputs: ['post']
})

export class PostItemComponent {
    public post: Post
}