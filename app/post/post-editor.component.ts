import {Input, OnInit, Component, EventEmitter} from 'angular2/core'
import {Client} from 'idevjs-angular-client/api'
import {IPost} from './post'

@Component({
    selector: 'post-editor',
    templateUrl: 'app/post/post-editor.component.html',
    styleUrls: ['app/post/post-editor.component.css'],
    inputs: ['post'],
    outputs: ['submitPost']
})

export class PostEditorComponent implements OnInit {
    submitPost: EventEmitter<Object> = new EventEmitter()
    post: IPost
    nodeList: Array<any>
    tabList: Array<any>
    
    constructor(private _client: Client) {
        this.getNodeList()
    }
    ngOnInit(){
        this.tabList = this.post.node.tabs
    }
    // @Input()
    // set post(post: Post){
    //     console.log(post)
    // }
    getNodeList() {
        this._client.getNodeList()
            .subscribe(
            res => this.nodeList = res,
            err => alert(err),
            () => console.log('getList')
            )
    }
    onSelectNode(node){
        this.nodeList.map((item)=>{
            if(item.name === node){
                this.tabList = item.tabs
            }
        })
    }
    onSubmit() {
        this.submitPost.emit(this.post)
    }
}