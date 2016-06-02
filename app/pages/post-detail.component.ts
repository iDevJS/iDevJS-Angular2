import {Component, OnInit} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {OnActivate, RouteSegment} from '@angular/router'
import {PostDetailComponent} from '../post/post-detail.component'
import {PostCommentComponent} from '../comment/post-comment.component'
import {Client} from 'idevjs-angular-client'

@Component({
    templateUrl: 'app/pages/post-detail.component.html',
    directives: [PostDetailComponent, PostCommentComponent],
    styleUrls: ['app/pages/post-detail.component.css']
})

export class PostPageComponent implements OnActivate, OnInit {
    public post
    public comments
    private _pid: string
    constructor(private _client: Client, private titleService: Title) {

    }
    routerOnActivate(curr: RouteSegment) {
        this._pid = curr.getParam('id')
    }
    ngOnInit() {
        this.getPost()
    }
    getPost() {
        this._client.getPost(this._pid,{})
            .subscribe(
            res => {
                this.post = res
                this.titleService.setTitle(res.title)
            },
            err => alert(err),
            () => console.log('get post')
            )
    }
    getComment() {
        this._client.getPostCommentList(this._pid,{})
            .subscribe(
            res => this.comments = res.comments,
            err => alert(err),
            () => console.log('get Comment')
            )
    }
}