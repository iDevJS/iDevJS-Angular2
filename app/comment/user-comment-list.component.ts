import {Component, OnInit} from 'angular2/core'
import {RouteParams} from 'angular2/router'
import {Comment} from './comment'
import {UserCommentItemComponent} from './user-comment-item.component'
import {CommentService} from './comment.service'

@Component({
    selector: 'user-comment-list',
    templateUrl: 'app/comment/user-comment-list.component.html',
    directives: [UserCommentItemComponent],
    providers: [CommentService],
    inputs: ['comments']
})

export class UserCommentListComponent{
    public comments:Comment[]
    private _uid: string
    
    constructor(private _commentService: CommentService, routeParams: RouteParams){
        this._uid = routeParams.get('id')
    }
}