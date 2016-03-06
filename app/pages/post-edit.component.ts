import {Component, OnInit} from 'angular2/core'
import {RouteParams} from 'angular2/router'
import {PostService} from '../service/api'
import {PostPageComponent} from './post-detail.component'
import {PostEditorComponent} from '../post/post-editor.component'

@Component({
    templateUrl: 'app/pages/post-edit.component.html',
    directives: [PostEditorComponent],
    providers: [PostService]
})

export class PostEditPageComponent implements OnInit{
    public post
    private _pid:string
    constructor(private _routeParams: RouteParams, private _postService: PostService){
       this._pid = this._routeParams.get('id') 
    }
    ngOnInit(){
        this.getPost()
    }
    getPost(){
        this._postService.getPostRaw(this._pid)
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
            node: post.node
        }
        this._postService.updatePost(this._pid, data)
        .subscribe(
            res => this.post = res,
            err => alert(err),
            () => console.log('update post')
        )
        
        console.log(post)
    }
}