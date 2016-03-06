import {Component, OnInit} from 'angular2/core'
import {RouteParams} from 'angular2/router'
import {PostDetailComponent} from '../post/post-detail.component'
import {CommentListComponent} from '../comment/comment-list.component'
import {PostService, CommentService} from '../service/api'

@Component({
    templateUrl: 'app/pages/post-detail.component.html',
    directives: [PostDetailComponent ,CommentListComponent],
    providers: [PostService, CommentService]
})

export class PostPageComponent implements OnInit{
    public post
    private _pid:string
    constructor(private _routeParams: RouteParams, private _postService: PostService){
        this._pid = this._routeParams.get('id')
    }
    ngOnInit(){
        this.getPost()
    }
    getPost(){
        this._postService.getPost(this._pid)
        .subscribe(
            res => this.post = res,
            err => alert(err),
            () => console.log('get post')
        )
    }
}