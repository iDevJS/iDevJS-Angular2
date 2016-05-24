import {Component, OnInit} from '@angular/core'
import {OnActivate, RouteSegment, Router, ROUTER_DIRECTIVES} from '@angular/router'
import {Client} from 'idevjs-angular-client'
import {AcPagination} from '../utils/pagination'
import {NgcTabHeader} from '../utils/tab-header'
import {PostItemComponent} from '../post/post-item.component'
import {NavComponent} from '../header/nav.component'

@Component({
    selector: 'home-page',
    templateUrl: 'app/pages/node-post.component.html',
    directives: [NavComponent, NgcTabHeader, PostItemComponent,  ROUTER_DIRECTIVES]
})

export class NodePostComponent implements OnActivate, OnInit {
    public node: any
    private nodeName: string
    private curSegment: RouteSegment
    public posts: any[] = []
    public collectionSize: number = 0
    public pageSize: number = 10
    public tabList = [
        { "alias": "全部", "name": "", "type": "tab" },
        { "alias": "热门", "name": "hot", "type": "tab" },
        { "alias": "精华", "name": "recommend", "type": "tab" }
    ]
    private selectedTab = this.tabList[0]
    constructor(private _client: Client, private router: Router) {

    }
    routerOnActivate(curr: RouteSegment) {
        this.nodeName = curr.getParam('name')
    }
    ngOnInit() {
        this.setPage(1)
        this.getNode()
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
        this._client.getNodePostList(this.nodeName, {
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

    }
    getNode() {
        this._client.getNode(this.nodeName)
            .subscribe(
            res => {
                this.node = res
                this.tabList = this.tabList.concat(res.tabs)
            }
            )
    }
}