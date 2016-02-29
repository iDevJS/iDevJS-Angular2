import {Component, Input} from 'angular2/core'
import {ROUTER_DIRECTIVES} from 'angular2/router'
import {Post} from './post'

@Component({
    selector: 'post-header',
    templateUrl: 'app/post/post-detail-header.component.html',
    directives: [ROUTER_DIRECTIVES],
    inputs: ['post']
    // styleUrls: ['app/post/post-detail-header.component.css']  
})

export class PostHeaderComponent {
    public post:Post
    
}
