import {Component, OnInit} from 'angular2/core'
import {CommentItemComponent} from './comment-item.component'
import {CommentService} from './comment.service'
import {RouteParams} from 'angular2/router'

@Component({
    selector: 'comment-list',
    templateUrl: 'app/comment/comment-list.component.html',
    directives: [CommentItemComponent],
    providers: [CommentService]
})

export class CommentListComponent implements OnInit{
    private _pid: string
    constructor(private _commentService: CommentService, routeParams: RouteParams){
        this._pid = routeParams.get('id')
    }
    
    ngOnInit(){
        this._commentService.getPostComment(this._pid)
    }
}