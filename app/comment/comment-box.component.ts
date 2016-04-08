import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {NgForm} from 'angular2/common'

@Component({
    selector: 'comment-box',
    templateUrl: 'app/comment/comment-box.component.html',
    styleUrls: ['app/comment/comment-box.component.css'],
    inputs: ['content', 'isSubmitting'],
    outputs: ['addComment']
})

export class CommentBoxComponent {
    private content:string
    private isSubmitting:boolean
    private addComment = new EventEmitter<string>()
    @Output() contentChange:EventEmitter<string> = new EventEmitter()
    
    onkeyup(e){
        if(e.keyCode === 50){
            console.log('@someone')
        }
    }
    
    onSubmit(text){
       this.isSubmitting = true
       this.addComment.next(text)
    }
}