import {Component, OnInit} from 'angular2/core'
import {RouteParams} from 'angular2/router'
import {PostDetailComponent} from '../post/post-detail.component'
import {PostCommentComponent} from '../comment/post-comment.component'
import {Client} from 'idevjs-angular-client/api'

@Component({
    templateUrl: 'app/pages/post-detail.component.html',
    directives: [PostDetailComponent ,PostCommentComponent],
    styleUrls: ['app/pages/post-detail.component.css']
})

export class PostPageComponent implements OnInit{
    public post
    public comments
    private _pid:string
    constructor(private _routeParams: RouteParams, private _client: Client){
        this._pid = this._routeParams.get('id')
    }
    ngOnInit(){
        this.getPost()
    }
    getPost(){
        this._client.getPost(this._pid)
        .subscribe(
            res => this.post = res,
            err => alert(err),
            () => console.log('get post')
        )
    }
    getComment(){
        this._client.getPostCommentList(this._pid)
        .subscribe(
            res => this.comments = res,
            err => alert(err),
            () => console.log('get Comment')
        )
    }
}