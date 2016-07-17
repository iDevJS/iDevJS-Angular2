import {Component, EventEmitter} from '@angular/core'
import {ROUTER_DIRECTIVES} from '@angular/router'

@Component({
    selector: 'user-comment-item',
    templateUrl: './user-comment-item.component.html',
    styleUrls: ['./comment-item.component.css'],
    directives: [ROUTER_DIRECTIVES],
    inputs: ['comment']
})

export class UserCommentItemComponent {
    constructor(){
        
    }
}