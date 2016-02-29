import {Component, EventEmitter} from 'angular2/core'
import {Post} from './post'

@Component({
    selector: 'post-editor',
    templateUrl: 'app/post/post-editor.component.html',
    inputs: ['post']
})

export class PostEditorComponent {
    post: Post
    submitPost: EventEmitter<Object> = new EventEmitter()
    
    onSubmit(){
        console.log(this.post)
        this.submitPost.emit(this.post)
    }
}