import {Component, EventEmitter} from 'angular2/core'
import {ROUTER_DIRECTIVES} from 'angular2/router'

@Component({
    selector: 'user-comment-item',
    templateUrl: 'app/comment/user-comment-item.component.html',
    styleUrls: ['app/comment/comment-item.component.css'],
    directives: [ROUTER_DIRECTIVES],
    inputs: ['comment']
})

export class UserCommentItemComponent {
    constructor(){
        
    }
}