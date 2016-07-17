import {Component, OnInit, OnDestroy} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {Router, ActivatedRoute} from '@angular/router'
import {PostDetailComponent} from '../components/post/post-detail.component'
import {PostCommentComponent} from '../components/comment/post-comment.component'
import {Client} from 'idevjs-angular-client'

@Component({
    templateUrl: './post-detail.component.html',
    styleUrls: ['./post-detail.component.css'],
    directives: [PostDetailComponent, PostCommentComponent]
})

export class PostPageComponent implements OnInit, OnDestroy {
    public post
    public comments
    private _pid: string
    private sub: any

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private titleService: Title,
        private _client: Client
    ) { }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this._pid = params['id']
        })
        this.getPost()
    }
    ngOnDestroy() {
        this.sub.unsubscribe()
    }
    getPost() {
        this._client.getPost(this._pid, {})
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
        this._client.getPostCommentList(this._pid, {})
            .subscribe(
            res => this.comments = res.comments,
            err => alert(err),
            () => console.log('get Comment')
            )
    }
}