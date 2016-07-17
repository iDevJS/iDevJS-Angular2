import {Input, Output, OnInit, Component, EventEmitter, ChangeDetectionStrategy} from '@angular/core'
import {Client} from 'idevjs-angular-client'
import {IPost} from './post'

@Component({
    selector: 'post-editor',
    templateUrl: './post-editor.component.html',
    styleUrls: ['./post-editor.component.css'],
    inputs: ['post'],
    outputs: ['submitPost'],
    // changeDetection: ChangeDetectionStrategy.OnPush
})

export class PostEditorComponent implements OnInit {
    post: IPost
    _selectedNode: string
    nodeList: Array<any>
    tabList: Array<any>
    submitPost: EventEmitter<Object> = new EventEmitter()

    constructor(private _client: Client) {

    }

    // set post(post: IPost) {
    //     this._selectedNode = post.node.name
    // }

    ngOnInit() {
        this.getNodeList()
        this._selectedNode = this.post.node.name
        this.tabList = this.post.node.tabs
    }

    getNodeList() {
        this._client.getNodeList()
            .subscribe(
            res => {
                this.nodeList = res
                if (this._selectedNode) {
                    this.nodeList.map(node => {
                        if (node.name === this._selectedNode) {
                            this.tabList = node.tabs
                        }
                    })
                }
            },
            err => alert(err),
            () => console.log('getList')
            )
    }

    onSelectNode(node) {
        this.nodeList.map((item) => {
            if (item.name === node) {
                this.tabList = item.tabs
            }
        })
    }

    onSubmit() {
        this.submitPost.emit(this.post)
    }
}