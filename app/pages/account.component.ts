import {Component, OnInit} from '@angular/core'
import {OnActivate, RouteSegment} from '@angular/router'
import {UserPostListComponent} from '../post/user-post-list.component'
import {UserCommentListComponent} from '../comment/user-comment-list.component'
import {Client} from 'idevjs-angular-client'

@Component({
    templateUrl: 'app/pages/account.component.html',
    directives: [UserPostListComponent, UserCommentListComponent]
})

export class AccountPageComponent implements OnActivate, OnInit {
    public posts
    public comments
    private _uid: string

    constructor(private _client: Client) {

    }
    routerOnActivate(curr: RouteSegment) {
        this._uid = curr.getParam('id')
    }
    ngOnInit() {
        this.getPosts()
        this.getComments()
    }
    getPosts() {
        this._client.getUserPostList(this._uid)
            .subscribe(
            res => this.posts = res.posts,
            err => alert(err),
            () => console.log('get posts')
            )
    }
    getComments() {
        this._client.getUserCommentList(this._uid)
            .subscribe(
            res => this.comments = res.comments.map((item) => { item.content.replace(/\n/g, '<br>'); return item }),
            err => alert(err),
            () => console.log('get comments')
            )
    }
}