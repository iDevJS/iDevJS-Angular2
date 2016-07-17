import {Component, Input, Output, EventEmitter} from '@angular/core'
import {NgForm} from '@angular/common'

@Component({
    selector: 'comment-box',
    templateUrl: './comment-box.component.html',
    styleUrls: ['./comment-box.component.css'],
    inputs: ['content', 'isSubmitting'],
    outputs: ['addComment']
})

export class CommentBoxComponent {
    private content: string
    private isSubmitting: boolean
    private addComment = new EventEmitter<string>()
    // @Output() contentChange: EventEmitter<string> = new EventEmitter()

    onkeyup(e) {
        if (e.keyCode === 50) {
            console.log('@someone')
        }
    }

    onSubmit(text) {
       this.isSubmitting = true
       this.addComment.next(text)
    }
}