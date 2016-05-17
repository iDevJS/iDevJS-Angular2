import {Component, OnInit} from '@angular/core'
import {ROUTER_DIRECTIVES} from '@angular/router'
import {Client} from 'idevjs-angular-client'
import {PostEditorComponent} from '../post/post-editor.component'
import {IPost} from '../post/post'

@Component({
    selector: 'create-post',
    templateUrl: 'app/pages/post-create.component.html',
    directives: [PostEditorComponent, ROUTER_DIRECTIVES]
})

export class PostCreatePageComponent implements OnInit {
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
    ngOnInit() {

    }
    onSubmitPost(post) {
        console.log(post)
        let data = {
            title: post.title,
            content: post.content,
            node: post.node.name,
            tab: post.tab,
            content_format: 'markdown'
        }
        this._client.addPost(data)
            .subscribe(
            res => this.post = res,
            err => alert(err),
            () => console.log('added post')
            )

    }
}