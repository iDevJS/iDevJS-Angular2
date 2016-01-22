import {Component, OnInit} from 'angular2/core'
import {PostService} from './post.service'
import {PostItemComponent} from './post-item.component'
import {Post} from './post'

@Component({
    selector: 'post-list',
    templateUrl: 'app/post/post-list.component.html',
    // styleUrls: ['app/post/post-list.component.css'],
    directives: [PostItemComponent],
    providers: [PostService]
})

export class PostListComponent implements OnInit {
    public posts: Post[]
    
    constructor(private _postService: PostService) {}
    
    getPosts() {
        this._postService.getPostList().then(posts => this.posts = posts)
    }
    ngOnInit(){
       this.getPosts()
    }
}