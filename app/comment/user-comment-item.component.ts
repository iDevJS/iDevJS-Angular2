import {Component, EventEmitter} from '@angular/core'
import {ROUTER_DIRECTIVES} from '@angular/router'

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