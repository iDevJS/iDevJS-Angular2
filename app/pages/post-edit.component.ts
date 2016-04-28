import {Component, OnInit} from 'angular2/core'
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router'
import {Client} from 'idevjs-angular-client/api'
import {PostPageComponent} from './post-detail.component'
import {PostEditorComponent} from '../post/post-editor.component'

@Component({
    selector: 'edit-post',
    templateUrl: 'app/pages/post-edit.component.html',
    directives: [PostEditorComponent, ROUTER_DIRECTIVES]
})

export class PostEditPageComponent implements OnInit{
    public post: Object
    private _pid:string
    constructor(private _routeParams: RouteParams, private _client: Client){
       this._pid = this._routeParams.get('id') 
    }
    ngOnInit(){
        this.getPost()
    }
    getPost(){
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
            node: post.node.name,
            tab: post.tab
        }
        this._client.updatePost(this._pid, data)
        .subscribe(
            res => this.post = res,
            err => alert(err),
            () => console.log('update post')
        )
      
    }
}