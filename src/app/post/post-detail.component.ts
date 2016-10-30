import {
  Component, OnInit, OnDestroy, HostBinding,
  trigger, transition, animate,
  style, state
} from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { Client } from 'idevjs-angular-client'
import { Post } from './post.interface'
import { PostDetailComponent } from '../components/post/post-detail.component'
import { PostCommentComponent } from '../components/comment/post-comment.component'


@Component({
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
})

export class PostPageComponent implements OnInit, OnDestroy {
  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'absolute';
  }

  public post
  public comments
  private sub: any

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private client: Client
  ) { }
  ngOnInit() {
    // this.sub = this.route.params.subscribe(params => {
    //   this._pid = params['id']
    // })
    this.route.params.forEach((params: Params) => {
      let pid = +params['id']
      // this.getPost(pid)
      this.getComment(pid)
    })
    this.route.data.forEach((data: { post: Post }) => {
      this.post = data.post
    })
  }
  ngOnDestroy() {
    this.sub.unsubscribe()
  }
  getPost(pid) {
    this.client.getPost(pid, {})
      .subscribe(
      res => {
        this.post = res
        this.titleService.setTitle(res.title)
      },
      err => alert(err),
      () => console.log('get post')
      )
  }
  getComment(pid) {
    this.client.getPostCommentList(pid, {})
      .subscribe(
      res => this.comments = res.comments,
      err => alert(err),
      () => console.log('get Comment')
      )
  }
}