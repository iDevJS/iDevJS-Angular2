import {Component, OnInit} from '@angular/core'
import {OnActivate, RouteSegment, ROUTER_DIRECTIVES} from '@angular/router'
import {AcPagination} from '../utils/pagination'
import {UserCommentItemComponent} from '../comment/user-comment-item.component'
import {Client} from 'idevjs-angular-client'

@Component({
    templateUrl: 'app/pages/user-comment.component.html',
    directives: [ROUTER_DIRECTIVES, UserCommentItemComponent, AcPagination]
})

export class UserCommentPageComponent implements OnActivate, OnInit {
    public comments
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
        this.getComments(startNo, this.pageSize)
    }
    getComments(start = 0, count = 10) {
        this._client.getUserCommentList(this._name, {
            start: start,
            count: count
        }).subscribe(
            res => this.comments = res.comments.map((item) => { item.content.replace(/\n/g, '<br>'); return item }),
            err => alert(err),
            () => console.log('get comments')
            )
    }
}