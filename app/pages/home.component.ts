import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core'
import {ROUTER_DIRECTIVES} from '@angular/router'
import {AcPagination} from '../utils/pagination'
import {NgcTabHeader} from '../utils/tab-header'
import {PostItemComponent} from '../post/post-item.component'
import {NavComponent} from '../header/nav.component'
import {Client} from 'idevjs-angular-client'

@Component({
    selector: 'home-page',
    templateUrl: 'app/pages/home.component.html',
    styleUrls: ['app/pages/home.component.css'],
    directives: [AcPagination, NgcTabHeader, PostItemComponent, NavComponent, ROUTER_DIRECTIVES],
    // changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomeComponent implements OnInit {
    public title: string = 'Let us rock'
    public posts: any[] = []
    public collectionSize: number = 0
    public pageSize: number = 10
    public tabList = [
        { "alias": "AngularJS", "name": "angular" },
        { "alias": "ReactJS", "name": "react" },
        { "alias": "VueJS", "name": "vue" }
    ]
    constructor(private _client: Client) {

    }
    ngOnInit() {
        this.setPage(1)
    }
    setTab(tab) {
        console.log(tab)
    }
    setPage(pageNo: number) {
        let startNo: number = this.pageSize * (pageNo - 1 || 0)
        this.getPosts(startNo, this.pageSize)
    }
    getPosts(start?, count?) {
        this._client.getPostList(start || 0, count || 10)
            .subscribe(
            res => {
                this.posts = res.posts
                this.collectionSize = res.total
            },
            err => alert(err),
            () => console.log('completed')
            )
    }
}