import {Component, OnInit} from '@angular/core'
import {OnActivate, RouteSegment, Router, ROUTER_DIRECTIVES} from '@angular/router'
import {Client} from 'idevjs-angular-client'
import {AcPagination} from '../utils/pagination'
import {NgcTabHeader} from '../utils/tab-header'
import {PostItemComponent} from '../post/post-item.component'

interface ITab {
    name: string,
    alias: string,
    type: string
}

@Component({
    selector: 'home-page',
    templateUrl: 'app/pages/node-post.component.html',
    directives: [NgcTabHeader, AcPagination, PostItemComponent, ROUTER_DIRECTIVES]
})

export class NodePostComponent implements OnActivate, OnInit {
    public node: any
    public tabIndex: number = 0
    private nodeName: string
    private _tab: string
    private selectedTab: ITab
    private curSegment: RouteSegment
    public posts: any[] = []
    public collectionSize: number = 0
    public pageSize: number = 10
    public tabList = [
        { "alias": "全部", "name": "", "type": "tab" },
        { "alias": "热门", "name": "hot", "type": "tab" },
        { "alias": "精华", "name": "recommend", "type": "tab" }
    ]
    constructor(private _client: Client, private router: Router) {

    }
    routerOnActivate(curr: RouteSegment) {
        this.nodeName = curr.getParam('name')
        this._tab = curr.getParam('tab')
        this.getNode()
    }
    ngOnInit() {

    }
    setTab(tab) {
        this.selectedTab = tab
        this.setPage(1)
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
                if (this._tab) {
                    this.tabList.forEach((item, i) => {
                        if (item.name === this._tab) {
                            this.selectedTab = item
                            this.tabIndex = i
                        }
                    })
                }else{
                    this.selectedTab = this.tabList[0]
                }
                this.setPage(1)
            }
            )
    }
}