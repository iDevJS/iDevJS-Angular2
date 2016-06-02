import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core'
import {Router, RouteSegment, OnActivate, ROUTER_DIRECTIVES} from '@angular/router'
import {AcPagination} from '../utils/pagination'
import {NgcTabHeader} from '../utils/tab-header'
import {PostItemComponent} from '../post/post-item.component'
import {Client} from 'idevjs-angular-client'

@Component({
    selector: 'home-page',
    templateUrl: 'app/pages/home.component.html',
    styleUrls: ['app/pages/home.component.css'],
    directives: [AcPagination, NgcTabHeader, PostItemComponent, ROUTER_DIRECTIVES],
    // changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomeComponent implements OnActivate, OnInit {
    private curSegment: RouteSegment
    public posts: any[] = []
    public collectionSize: number = 0
    public pageSize: number = 10
    public tabList = [
        { "alias": "全部", "name": "", "type": "tab" },
        { "alias": "热门", "name": "hot", "type": "tab" },
        { "alias": "最新", "name": "new", "type": "tab" },
        { "alias": "精华", "name": "recommend", "type": "tab" },
        { "alias": "招聘", "name": "job", "type": "tab" },
        { "alias": "AngularJS", "name": "angular", "type": "node" },
        { "alias": "ReactJS", "name": "react", "type": "node" },
        { "alias": "VueJS", "name": "vue", "type": "node" },
        { "alias": "NodeJS", "name": "node", "type": "node"}
    ]
    private selectedTab = this.tabList[0]
    constructor(private _client: Client, private router: Router) {

    }
    routerOnActivate(curr: RouteSegment) {
        this.curSegment = curr
    }
    ngOnInit() {
        this.setPage(1)
    }
    setTab(tab) {
        this.selectedTab = tab
        this.setPage(1)
        // this.router.navigate(['/', { tab: tab.name }])
    }
    setPage(pageNo: number) {
        let startNo: number = this.pageSize * (pageNo - 1 || 0)
        this.getPosts(startNo, this.pageSize)
    }
    getPosts(start?, count?) {
        if (this.selectedTab.type === 'tab') {
            this._client.getPostList({
                start: start || 0,
                count: count || 10,
                tab: this.selectedTab.name
            }).subscribe(
                res => {
                    this.posts = res.posts
                    this.collectionSize = res.total
                },
                err => alert(err),
                () => console.log('completed')
                )
        } else {
            this._client.getNodePostList(this.selectedTab.name, {
                start: start || 0,
                count: count || 10
            }).subscribe(
                res => {
                    this.posts = res.posts
                    this.collectionSize = res.total
                },
                err => alert(err),
                () => console.log('completed')
                )
        }
    }
}