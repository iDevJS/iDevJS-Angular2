import {Component, Input, ChangeDetectionStrategy, OnInit, OnDestroy} from '@angular/core'
import {Router, ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router'
import {Comment} from './comment'
import {CommentItemComponent} from './comment-item.component'
import {CommentBoxComponent} from './comment-box.component'
import {Client} from 'idevjs-angular-client'

@Component({
    selector: 'post-comment',
    templateUrl: './post-comment.component.html',
    styleUrls: ['./post-comment.component.css'],
    directives: [CommentItemComponent, CommentBoxComponent],
    // changeDetection: ChangeDetectionStrategy.OnPush
})

export class PostCommentComponent implements OnInit, OnDestroy {
    public comments: Comment[]
    public isSubmitting: boolean
    private content: string
    private _pid: string
    private sub: any

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private client: Client
    ) { }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this._pid = params['id']
        })
        this.getComments()
    }
    ngOnDestroy() {
        this.sub.unsubscribe()
    }
    getComments() {
        this.client.getPostCommentList(this._pid)
            .subscribe(
            res => this.comments = res.comments,
            err => alert(err),
            () => console.log('get comments')
            )
    }
    onReplyUser(name) {
        this.content += `@${name} `
    }
    onLikeComment(id) {
        console.log(id)
    }
    onAddComment(value) {
        this.client.addPostComment(this._pid, value)
            .subscribe(
            res => { this.comments.push(res); this.content = '' },
            err => alert(err),
            () => this.isSubmitting = false
            )
    }
}