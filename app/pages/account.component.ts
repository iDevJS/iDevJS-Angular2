import {Component, OnInit} from '@angular/core'
import {OnActivate, RouteSegment, ROUTER_DIRECTIVES} from '@angular/router'
import {UserPostItemComponent} from '../post/user-post-item.component'
import {UserCommentItemComponent} from '../comment/user-comment-item.component'
import {Client} from 'idevjs-angular-client'

@Component({
    templateUrl: 'app/pages/account.component.html',
    directives: [UserPostItemComponent, UserCommentItemComponent, ROUTER_DIRECTIVES]
})

export class AccountPageComponent implements OnActivate, OnInit {
    public user
    public posts
    public comments
    private _name: string

    constructor(private _client: Client) {

    }
    routerOnActivate(curr: RouteSegment) {
        this._name = curr.getParam('name')
    }
    ngOnInit() {
        this.getUser()
        this.getPosts()
        this.getComments()
    }
    getUser() {
        this._client.getUser(this._name).subscribe(
            res => this.user = res,
            err => alert(err),
            () => { console.log('get user') }
        )
    }
    getPosts() {
        this._client.getUserPostList(this._name, {
            start: 0,
            count: 10
        })
            .subscribe(
            res => this.posts = res.posts,
            err => alert(err),
            () => console.log('get posts')
            )
    }
    getComments() {
        this._client.getUserCommentList(this._name, {
            start: 0,
            count: 10
        }).subscribe(
            res => this.comments = res.comments.map((item) => { item.content.replace(/\n/g, '<br>'); return item }),
            err => alert(err),
            () => console.log('get comments')
            )
    }
}