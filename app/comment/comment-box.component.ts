import {Component, Output, EventEmitter} from 'angular2/core'
import {NgForm} from 'angular2/common'

@Component({
    selector: 'comment-box',
    templateUrl: 'app/comment/comment-box.component.html',
    inputs: ['content'],
    outputs: ['addComment']
})

export class CommentBoxComponent {
    private content:string
    private submitting:boolean
    private addComment = new EventEmitter<string>()
    
    onkeyup(e){
        // e.preventDefault()
        // console.log(this.model.content)
    }
    
    onSubmit(text){
       this.submitting = true
       console.log(text)
       this.addComment.next(text)
    }
}