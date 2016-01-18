import {Component, OnInit} from 'angular2/core'
import {PostService} from './post.service'
import {PostItemComponent} from './post-item.component'
import {Post} from './post'

@Component({
    selector: 'post-list',
    templateUrl: 'app/posts/post-list.component.html',
    // styleUrls: ['app/posts/post-list.component.css'],
    directives: [PostItemComponent]
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