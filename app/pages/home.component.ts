import {Component, ChangeDetectionStrategy, OnInit} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {PostListComponent} from '../post/post-list.component'
import {NavComponent} from '../header/nav.component'
import {Client} from 'idevjs-angular-client/api'

@Component({
    selector: 'home-page',
    templateUrl: 'app/pages/home.component.html',
    styleUrls: ['app/pages/home.component.css'],
    directives: [PostListComponent, NavComponent, ROUTER_DIRECTIVES],
    // changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomeComponent implements OnInit {
    public title: string = 'Let us rock'
    public posts: any[] = []

    constructor(private _client: Client) {

    }
    getPosts() {
        this._client.getPostList()
            .subscribe(
            res => { console.log(res.status); this.posts = res },
            err => alert(err),
            () => console.log('completed')
            )
    }
    ngOnInit() {
        this.getPosts()
    }
}