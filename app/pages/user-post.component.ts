import {Component, OnInit} from '@angular/core'
import {OnActivate, RouteSegment, ROUTER_DIRECTIVES} from '@angular/router'
import {AcPagination} from '../utils/pagination'
import {UserPostItemComponent} from '../post/user-post-item.component'
import {Client} from 'idevjs-angular-client'

@Component({
    templateUrl: 'app/pages/user-post.component.html',
    directives: [ROUTER_DIRECTIVES, UserPostItemComponent, AcPagination]
})

export class UserPostPageComponent implements OnActivate, OnInit {
    public posts
    public collectionSize: number = 0
    public pageSize: number = 10
    private _name: string

    constructor(private _client: Client) {

    }
    routerOnActivate(curr: RouteSegment) {
        this._name = curr.getParam('name')
    }
    ngOnInit() {
        this.setPage(1)
    }
    setPage(pageNo: number) {
        let startNo: number = this.pageSize * (pageNo - 1 || 0)
        this.getPosts(startNo, this.pageSize)
    }
    getPosts(start = 0, count = 10) {
        this._client.getUserPostList(this._name, {
            start: start,
            count: count
        }).subscribe(
            res => this.posts = res.posts,
            err => alert(err),
            () => console.log('get posts')
            )
    }
}