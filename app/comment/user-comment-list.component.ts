import {Component,ChangeDetectionStrategy, OnInit} from '@angular/core'
import {RouteSegment} from '@angular/router'
import {Comment} from './comment'
import {UserCommentItemComponent} from './user-comment-item.component'
import {Client} from 'idevjs-angular-client'

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
    
    constructor(private _client: Client, route: RouteSegment){
        this._uid = route.getParam('id')
    }
}