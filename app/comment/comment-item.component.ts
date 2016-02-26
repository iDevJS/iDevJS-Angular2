import {Component, EventEmitter} from 'angular2/core'
import {CommentService} from './comment.service'

@Component({
    selector: 'comment-item',
    templateUrl: 'app/comment/comment-item.component.html',
    inputs: ['comment'],
    outputs: ['replyUser', 'likeComment']
})

export class CommentItemComponent {
    private replyUser = new EventEmitter<string>()
    private likeComment = new EventEmitter<string>()
    
    constructor(){
        
    }
    
    reply(comment){
        this.replyUser.emit(comment.author.name)
    }
    
    like(comment){
       this.likeComment.emit(comment._id)
    }
    
}