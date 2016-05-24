import {Component, OnInit} from '@angular/core'
import {OnActivate, RouteSegment, ROUTER_DIRECTIVES} from '@angular/router'
import {PostEditorComponent} from '../post/post-editor.component'
import {Client} from 'idevjs-angular-client'
import {IPost} from '../post/post'

@Component({
    selector: 'create-post',
    templateUrl: 'app/pages/post-create.component.html',
    directives: [PostEditorComponent, ROUTER_DIRECTIVES]
})

export class PostCreatePageComponent implements OnActivate, OnInit {
    public post: any
    constructor(private _client: Client) {
        this.post = {
            title: '',
            content: '',
            node: {
                name: '',
                tabs: []
            },
            tab: ''
        }
    }
    routerOnActivate(curr: RouteSegment) {
        this.post.node.name = curr.getParam('node') || ''
    }
    ngOnInit() {

    }
    onSubmitPost(post) {
        let data = {
            title: post.title,
            content: post.content,
            node: post.node.name,
            tab: post.tab,
            content_format: 'markdown'
        }
        console.log(data)
        this._client.addPost(data)
            .subscribe(
            res => this.post = res,
            err => alert(err),
            () => console.log('added post')
            )

    }
}