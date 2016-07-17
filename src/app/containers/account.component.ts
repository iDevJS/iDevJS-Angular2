import {Component, OnInit, OnDestroy} from '@angular/core'
import {Router, ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router'
import {UserPostItemComponent} from '../components/post/user-post-item.component'
import {UserCommentItemComponent} from '../components/comment/user-comment-item.component'
import {Client} from 'idevjs-angular-client'

@Component({
    templateUrl: './account.component.html',
    directives: [UserPostItemComponent, UserCommentItemComponent, ROUTER_DIRECTIVES]
})

export class AccountPageComponent implements OnInit, OnDestroy {
    public user
    public posts
    public comments
    private _name: string
    private sub: any

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private _client: Client
    ) { }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this._name = params['name']
        })
        this.getUser()
        this.getPosts()
        this.getComments()
    }
    ngOnDestroy() {
        this.sub.unsubscribe()
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