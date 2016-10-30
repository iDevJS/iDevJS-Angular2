import {Component, OnInit, OnDestroy} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {Client} from 'idevjs-angular-client'
import {PostEditorComponent} from '../components/post/post-editor.component'

@Component({
    selector: 'edit-post',
    templateUrl: './post-edit.component.html'
})

export class PostEditPageComponent implements OnInit, OnDestroy {
    public post: Object
    private sub: any
    private _pid: string
    constructor(private route: ActivatedRoute, private client: Client) {

    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this._pid = params['id']
        })
        this.getPost()
    }
    ngOnDestroy() {
        this.sub.unSubscribe()
    }
    getPost() {
        this.client.getPost(this._pid, {
            content_format: 'markdown'
        }).subscribe(
            res => this.post = res,
            err => alert(err),
            () => console.log('get post')
            )
    }
    onSubmitPost(post) {
        let data = {
            title: post.title,
            content: post.content,
            node: post.node.name,
            tab: post.tab
        }
        this.client.updatePost(this._pid, data)
            .subscribe(
            res => this.post = res,
            err => alert(err),
            () => console.log('update post')
            )

    }
}