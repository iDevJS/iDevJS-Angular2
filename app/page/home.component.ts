import {Component, OnInit} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {PostListComponent} from '../post/post-list.component'
import {NavComponent} from '../header/nav.component'
import {PostService} from '../service/api'

@Component({
    selector: 'home-page',
    templateUrl: 'app/page/home.component.html',
    providers: [PostService],
    directives: [PostListComponent, NavComponent, ROUTER_DIRECTIVES]
})

export class HomeComponent implements OnInit{
   public title:string = 'Let us rock'
   public posts 
   
   constructor(private _postService: PostService){
       
   }
   getPosts() {
        this._postService.getPostList()
        .subscribe(
            res => this.posts = res,
            err => alert(err),
            () => console.log('get posts')
        )
    }
    ngOnInit(){
       this.getPosts()
    }
}