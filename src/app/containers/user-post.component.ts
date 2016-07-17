import {Component, OnInit, OnDestroy} from '@angular/core'
import {Router, ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router'
import {AcPagination} from '../components/utils/pagination'
import {UserPostItemComponent} from '../components/post/user-post-item.component'
import {Client} from 'idevjs-angular-client'

@Component({
    templateUrl: './user-post.component.html',
    directives: [ROUTER_DIRECTIVES, UserPostItemComponent, AcPagination]
})

export class UserPostPageComponent implements OnInit, OnDestroy {
    public posts
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
        this.getPosts(startNo, this.pageSize)
    }
    getPosts(start = 0, count = 10) {
        this._client.getUserPostList(this.name, {
            start: start,
            count: count
        }).subscribe(
            res => this.posts = res.posts,
            err => alert(err),
            () => console.log('get posts')
            )
    }
}