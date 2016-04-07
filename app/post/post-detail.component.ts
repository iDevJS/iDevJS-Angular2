import {Component, OnInit, Input} from 'angular2/core'
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router'
import {IPost} from './post'
import {Client} from 'idevjs-angular-client/api'

@Component({
    selector: 'post-detail',
    templateUrl: 'app/post/post-detail.component.html',
    styleUrls: ['app/post/post-detail.component.css'],
    inputs: ['post'],
    directives: [ROUTER_DIRECTIVES]
})

export class PostDetailComponent {
    public post: IPost
    private _pid: string
    constructor(private _client: Client, private _routeParams: RouteParams) {
        this._pid = this._routeParams.get('id')
    }
    like() {

    }
}