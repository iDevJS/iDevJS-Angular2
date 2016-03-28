import {Component,ChangeDetectionStrategy, OnInit} from 'angular2/core'
import {RouteParams} from 'angular2/router'
import {Comment} from './comment'
import {UserCommentItemComponent} from './user-comment-item.component'
import {Client} from 'idevjs-angular-client/api'

@Component({
    selector: 'user-comment-list',
    templateUrl: 'app/comment/user-comment-list.component.html',
    directives: [UserCommentItemComponent],
    inputs: ['comments'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class UserCommentListComponent{
    public comments:Comment[]
    private _uid: string
    
    constructor(private _client: Client, routeParams: RouteParams){
        this._uid = routeParams.get('id')
    }
}