import {Component, OnInit, OnDestroy} from '@angular/core'
import { Router, ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router'
import {Client} from 'idevjs-angular-client'
import {AcPagination} from '../components/utils/pagination'
import {NgcTabHeader} from '../components/utils/tab-header'
import {PostItemComponent} from '../components/post/post-item.component'

interface ITab {
    name: string,
    alias: string,
    type: string
}

@Component({
    selector: 'home-page',
    templateUrl: './node-post.component.html',
    directives: [NgcTabHeader, AcPagination, PostItemComponent, ROUTER_DIRECTIVES]
})

export class NodePostComponent implements OnInit, OnDestroy {
    public node: any
    public tabIndex: number = 0
    private nodeName: string
    private tab: string
    private selectedTab: ITab
    public posts: any[] = []
    public collectionSize: number = 0
    public pageSize: number = 10
    public tabList = [
        { "alias": "全部", "name": "", "type": "tab" },
        { "alias": "热门", "name": "hot", "type": "tab" },
        { "alias": "精华", "name": "recommend", "type": "tab" }
    ]
    private sub: any
    private query: any

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private _client: Client
    ) { }
    ngOnInit() {
        // this.query = this.router.routerState.queryParams.subscribe(params => {})
        this.sub = this.route.params.subscribe(params => {
            this.nodeName = this.nodeName = params['name']
            this.tab = params['tab']
        })

        this.getNode()
    }
    ngOnDestroy() {
        this.sub.unsubscribe()
        // this.query.unsubscribe()
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
                if (this.tab) {
                    this.tabList.forEach((item, i) => {
                        if (item.name === this.tab) {
                            this.selectedTab = item
                            this.tabIndex = i
                        }
                    })
                } else {
                    this.selectedTab = this.tabList[0]
                }
                this.setPage(1)
            }
            )
    }
}