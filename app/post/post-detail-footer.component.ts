import {Component, Input} from 'angular2/core'
import {Post} from './post'

@Component({
    selector: 'post-footer',
    templateUrl: 'app/post/post-detail-footer.component.html',
    inputs: ['post']
    // styleUrls: ['app/post/post-detail-footer.component.css']  
})

export class PostFooterComponent {
    public post:Post
    
}
