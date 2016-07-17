import {Component, OnInit, OnDestroy} from '@angular/core'
import {ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router'
import {PostEditorComponent} from '../components/post/post-editor.component'
import {Client} from 'idevjs-angular-client'
import {IPost} from '../components/post/post'

@Component({
    selector: 'create-post',
    templateUrl: './post-create.component.html',
    directives: [PostEditorComponent, ROUTER_DIRECTIVES]
})

export class PostCreatePageComponent implements OnInit, OnDestroy {
    public post: any
    private sub: any
    constructor(private route: ActivatedRoute, private _client: Client) {
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
        this.sub = this.route.params.subscribe(params => {
            this.post.node.name = params['node']
        })
    }
    ngOnDestroy(){

    }
    onSubmitPost(post) {
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