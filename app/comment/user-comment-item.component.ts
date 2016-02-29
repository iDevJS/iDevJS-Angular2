import {Component, EventEmitter} from 'angular2/core'

@Component({
    selector: 'user-comment-item',
    templateUrl: 'app/comment/user-comment-item.component.html',
    styleUrls: ['app/comment/comment-item.component.css'],
    inputs: ['comment']
})

export class UserCommentItemComponent {
    constructor(){
        
    }
}