import {Component} from 'angular2/core'
import {Post} from './post'

@Component({
    selector: 'post-item',
    templateUrl: 'app/post/post-item.component.html',
    // styleUrls: ['app/post/post-item.component.css'],
    inputs: ['post']
})

export class PostItemComponent {
    public post: Post
}