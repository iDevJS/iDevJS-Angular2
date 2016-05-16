import {Component, OnInit} from '@angular/core'
import {OnActivate, RouteSegment, ROUTER_DIRECTIVES} from '@angular/router'
import {Client} from 'idevjs-angular-client'

import {PostListComponent} from '../post/post-list.component'
import {NavComponent} from '../header/nav.component'

@Component({
    selector: 'home-page',
    templateUrl: 'app/pages/home.component.html',
    directives: [PostListComponent, NavComponent, ROUTER_DIRECTIVES]
})

export class NodePostComponent implements OnActivate, OnInit {
    private node
    public title: string = 'Let us rock'
    public posts

    constructor(private _client: Client) {

    }
    routerOnActivate(curr: RouteSegment) {
        this.node = curr.getParam('name')
    }
    ngOnInit() {
        this.getPosts()
    }
    getPosts() {
        this._client.getNodePostList(this.node)
            .subscribe(
            res => this.posts = res,
            err => alert(err),
            () => console.log('get posts')
            )
    }
}