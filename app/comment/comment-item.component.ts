import {Component, EventEmitter} from 'angular2/core'
import {CommentService} from './comment.service'

@Component({
    selector: 'comment-item',
    templateUrl: 'app/comment/comment-item.component.html',
    inputs: ['comment'],
    outputs: ['replyUser']
})

export class CommentItemComponent {
    private replyUser = new EventEmitter<string>()
    
    constructor(){
        
    }
    
    reply(name){
        this.replyUser.next(name)
    }
    
    like(id){
        
    }
    
}