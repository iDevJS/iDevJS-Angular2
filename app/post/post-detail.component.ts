import {Component, OnInit} from 'angular2/core'
import {RouteParams} from 'angular2/router'
import {Post} from './post'
import {PostService} from './post.service'
import {PostHeaderComponent} from './post-detail-header.component'
import {PostFooterComponent} from './post-detail-footer.component'

@Component({
    selector: 'post-detail',
    templateUrl: 'app/post/post-detail.component.html',
    providers: [PostService],
    directives: [PostHeaderComponent, PostFooterComponent],
    inputs: ['post']
})

export class PostDetailComponent{
    public post:Post
    private _pid:string
    constructor(private _postService: PostService, private _routeParams: RouteParams){
        this._pid = this._routeParams.get('id')
    }
    like(){
        
    }
}