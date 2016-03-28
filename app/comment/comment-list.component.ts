import {Component, ChangeDetectionStrategy, OnInit} from 'angular2/core'
import {RouteParams} from 'angular2/router'
import {Comment} from './comment'
import {CommentItemComponent} from './comment-item.component'
import {CommentBoxComponent} from './comment-box.component'
import {Client} from 'idevjs-angular-client/api'

@Component({
    selector: 'comment-list',
    templateUrl: 'app/comment/comment-list.component.html',
    directives: [CommentItemComponent, CommentBoxComponent],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CommentListComponent implements OnInit{
    public comments:Comment[]
    public isSubmitting: boolean
    private content: string
    private _pid: string
    
    constructor(private _client: Client, routeParams: RouteParams){
        this._pid = routeParams.get('id')
        this.content = ''
    }
    
    ngOnInit(){
        this._client.getPostCommentList(this._pid)
        .subscribe(
            res => this.comments = res,
            err => alert(err),
            () => console.log('get comments')
        )
    }
    
    onReplyUser(name){
        this.content += `@${name} `
    }
    
    onLikeComment(id){
        console.log(id)      
    }
    
    onAddComment(value){
        this._client.addPostComment(this._pid, value)
        .subscribe(
            res => {this.comments.push(res); this.content = ''},
            err => alert(err),
            () => this.isSubmitting = false
        )
    }
}