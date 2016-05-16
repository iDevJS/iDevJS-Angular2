import {Component, OnInit, Input} from '@angular/core'
import {OnActivate, RouteSegment, ROUTER_DIRECTIVES} from '@angular/router'
import {IPost} from './post'
import {Client} from 'idevjs-angular-client'

@Component({
    selector: 'post-detail',
    templateUrl: 'app/post/post-detail.component.html',
    styleUrls: ['app/post/post-detail.component.css'],
    inputs: ['post'],
    directives: [ROUTER_DIRECTIVES]
})

export class PostDetailComponent implements OnActivate {
    public post: IPost
    private _pid: string
    constructor(private _client: Client) {

    }
    routerOnActivate(curr: RouteSegment) {
        this._pid = curr.getParam('id')
    }
    like() {

    }
}