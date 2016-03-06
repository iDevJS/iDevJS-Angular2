import {Component, OnInit} from 'angular2/core'
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router'
import {PostListComponent} from '../post/post-list.component'
import {NavComponent} from '../header/nav.component'
import {PostService} from '../service/api'

@Component({
    selector: 'home-page',
    templateUrl: 'app/pages/home.component.html',
    providers: [PostService],
    directives: [PostListComponent, NavComponent, ROUTER_DIRECTIVES]
})

export class NodePostComponent implements OnInit{
   private node
   public title:string = 'Let us rock'
   public posts 
   
   constructor(private _routeParams: RouteParams, private _postService: PostService){
       this.node = this._routeParams.get('name')
   }
   getPosts() {
        this._postService.getNodePostList(this.node)
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