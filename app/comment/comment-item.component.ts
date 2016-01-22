import {Component} from 'angular2/core'
import {CommentService} from './comment.service'

@Component({
    selector: 'comment-item',
    templateUrl: 'app/comment/cooment-item.component.html',
    inputs: ['comment']
})

export class CommentItemComponent {
    constructor(){
        
    }
    reply(){
        
    }
    like(id){
        
    }
    
}