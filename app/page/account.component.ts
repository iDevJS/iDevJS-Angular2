import {Component, OnInit} from 'angular2/core'
import {RouteParams} from 'angular2/router'
import {UserPostListComponent} from '../post/user-post-list.component'
import {UserCommentListComponent} from '../comment/user-comment-list.component'
import {PostService, CommentService} from '../service/api'

@Component({
    templateUrl: 'app/page/account.component.html',
    directives: [UserPostListComponent, UserCommentListComponent],
    providers: [PostService, CommentService]
})

export class AccountPageComponent implements OnInit{
    public posts 
    public comments
    private _uid: string
     
    constructor(private _postService: PostService, private _commentService: CommentService, private _routeParams: RouteParams){
        this._uid = this._routeParams.get('id')
    }
    ngOnInit(){
        this.getPosts()
        this.getComments()
    }
    getPosts() {
        this._postService.getUserPostList(this._uid)
        .subscribe(
            res => this.posts = res,
            err => alert(err),
            () => console.log('get posts')
        )
    }
    getComments(){
        this._commentService.getUserComment(this._uid)
        .subscribe(
            res => this.comments = res,
            err => alert(err),
            () => console.log('get comments')
        )
    }
}