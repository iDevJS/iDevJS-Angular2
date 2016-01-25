import {Component, OnInit} from 'angular2/core'
import {RouteParams} from 'angular2/router'
import {Post} from '../post/post'
import {PostService} from '../post/post.service'
import {NavComponent} from '../header/nav.component'
import {CommentListComponent} from '../comment/comment-list.component'

@Component({
    templateUrl: 'app/page/post-detail.component.html',
    providers: [PostService],
    directives: [NavComponent, CommentListComponent]
})

export class PostDetailComponent implements OnInit {
    public post:Post
    private _pid:string
    constructor(private _postService: PostService, private _routeParams: RouteParams){
        this._pid = this._routeParams.get('id')
    }
    
    ngOnInit(){
        this._postService.getPost(this._pid).then()
    }
    
    like(){
        
    }
}