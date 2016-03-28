import {Component, OnInit} from 'angular2/core'
import {RouteParams} from 'angular2/router'
import {Client} from 'idevjs-angular-client/api'
import {PostEditorComponent} from '../post/post-editor.component'

@Component({
    templateUrl: 'app/pages/post-edit.component.html',
    directives: [PostEditorComponent]
})

export class PostCreatePageComponent implements OnInit{
    public post
    private _pid:string
    constructor(private _routeParams: RouteParams, private _client: Client){
       this._pid = this._routeParams.get('id') 
    }
    ngOnInit(){
        this.getNodeList()
    }
    getNodeList(){
        this._client.getPostRaw(this._pid)
        .subscribe(
            res => this.post = res,
            err => alert(err),
            () => console.log('get post')
        )
    }
    onSubmitPost(post){
        var data = {
            title: post.title,
            content: post.content,
            node: post.node.name
        }
        this._client.updatePost(this._pid, data)
        .subscribe(
            res => this.post = res,
            err => alert(err),
            () => console.log('update post')
        )
      
    }
}