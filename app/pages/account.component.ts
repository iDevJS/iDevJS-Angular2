import {Component, OnInit} from 'angular2/core'
import {RouteParams} from 'angular2/router'
import {UserPostListComponent} from '../post/user-post-list.component'
import {UserCommentListComponent} from '../comment/user-comment-list.component'
import {Client} from 'idevjs-angular-client/api'

@Component({
    templateUrl: 'app/pages/account.component.html',
    directives: [UserPostListComponent, UserCommentListComponent]
})

export class AccountPageComponent implements OnInit{
    public posts 
    public comments
    private _uid: string
     
    constructor(private _client: Client, private _routeParams: RouteParams){
        this._uid = this._routeParams.get('id')
    }
    ngOnInit(){
        this.getPosts()
        this.getComments()
    }
    getPosts() {
        this._client.getUserPostList(this._uid)
        .subscribe(
            res => this.posts = res,
            err => alert(err),
            () => console.log('get posts')
        )
    }
    getComments(){
        this._client.getUserCommentList(this._uid)
        .subscribe(
            res => this.comments = res.map((item) => {item.content.replace(/\n/g, '<br>');return item}),
            err => alert(err),
            () => console.log('get comments')
        )
    }
}