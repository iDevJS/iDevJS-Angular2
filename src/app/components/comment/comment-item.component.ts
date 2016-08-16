import {Component, EventEmitter} from '@angular/core'
import {ROUTER_DIRECTIVES} from '@angular/router'
import {Client} from 'idevjs-angular-client'

@Component({
  selector: 'comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css'],
  directives: [ROUTER_DIRECTIVES],
  inputs: ['comment'],
  outputs: ['replyUser', 'likeComment']
})

export class CommentItemComponent {
  private replyUser = new EventEmitter<string>()
  private likeComment = new EventEmitter<string>()
  public comment: any
  constructor(private client: Client) {

  }
  ngOnInit() {
    // 1, first of first

  }
  ngAfterContentInit() {
    // 2
    this.comment.likes_count = 1
  }
  reply(comment) {
    this.replyUser.emit(comment.author.name)
  }

  like(comment) {
    this.likeComment.emit(comment._id)
  }

}