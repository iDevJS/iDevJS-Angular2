import {Component, EventEmitter} from 'angular2/core'
import {Post} from './post'

@Component({
    selector: 'post-editor',
    templateUrl: 'app/post/post-editor.component.html',
    inputs: ['post'],
    outputs: ['submitPost']
})

export class PostEditorComponent {
    post: Post
    submitPost: EventEmitter<Object> = new EventEmitter()
    
    onSubmit(){
        this.submitPost.emit(this.post)
    }
}