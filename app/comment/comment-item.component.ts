import {Component, EventEmitter} from '@angular/core'
import {ROUTER_DIRECTIVES} from '@angular/router'
import {CommentService} from './comment.service'

@Component({
    selector: 'comment-item',
    templateUrl: 'app/comment/comment-item.component.html',
    styleUrls: ['app/comment/comment-item.component.css'],
    directives: [ROUTER_DIRECTIVES],
    inputs: ['comment'],
    outputs: ['replyUser', 'likeComment']
})

export class CommentItemComponent {
    private replyUser = new EventEmitter<string>()
    private likeComment = new EventEmitter<string>()

    constructor() {

    }

    reply(comment) {
        this.replyUser.emit(comment.author.name)
    }

    like(comment) {
        this.likeComment.emit(comment._id)
    }

}