import {Component} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {PostListComponent} from './posts/post-list.component'
import {HomeComponent} from './home/home.component'
import {PostService} from './posts/post.service'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [PostListComponent, ROUTER_DIRECTIVES],
    providers: [PostService]
})

@RouteConfig([
    {path: '/', name: 'Posts', component: PostListComponent, useAsDefault: true},
    {path: '/posts', name: 'Home', component: HomeComponent},
    // {path: '/u/:name', name: 'AccountDetail', component: AccountComponent}
    // {path: '/account/:name', name: 'AccountDetail', component: AccountComponent}
    // {path: '/post/:id', name: 'PostDetail', component: PostDetailComponent}
])

export class AppComponent {
    public title = 'iDevJS'
}
