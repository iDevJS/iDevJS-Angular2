import {Component, OnInit, OnDestroy} from '@angular/core'
import {Router, ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router'
import {AcPagination} from '../components/utils/pagination'
import {UserCommentItemComponent} from '../components/comment/user-comment-item.component'
import {Client} from 'idevjs-angular-client'

@Component({
    templateUrl: './user-comment.component.html',
    directives: [ROUTER_DIRECTIVES, UserCommentItemComponent, AcPagination]
})

export class UserCommentPageComponent implements OnInit, OnDestroy {
    public comments
    public collectionSize: number = 0
    public pageSize: number = 10
    private name: string
    private sub: any

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private _client: Client
    ) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.name = params['name']
        })
        this.setPage(1)
    }
    ngOnDestroy() {
        this.sub.unsubscribe()
    }
    setPage(pageNo: number) {
        let startNo: number = this.pageSize * (pageNo - 1 || 0)
        this.getComments(startNo, this.pageSize)
    }
    getComments(start = 0, count = 10) {
        this._client.getUserCommentList(this.name, {
            start: start,
            count: count
        }).subscribe(
            res => this.comments = res.comments.map((item) => { item.content.replace(/\n/g, '<br>'); return item }),
            err => alert(err),
            () => console.log('get comments')
            )
    }
}