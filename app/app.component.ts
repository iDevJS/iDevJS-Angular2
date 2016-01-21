import {Component} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {PostListComponent} from './posts/post-list.component'
import {HomeComponent} from './page/home.component'
import {LoginComponent} from './page/login.component'

@Component({
    selector: 'idevjs-app',
    templateUrl: 'app/app.component.html',
    directives: [HomeComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/', name: 'Home', component: HomeComponent, useAsDefault: true},
    {path: '/login', name: 'Login', component: LoginComponent},
    // {path: '/signup', name: 'Signup', component: SignupComponent},
    // {path: '/explore', name: 'Explore', component: PostListComponent},
    // {path: '/post/:id', name: 'PostDetail', component: PostDetailComponent},
    // {path: '/u/:name', name: 'AccountDetail', component: AccountComponent},
    // {path: '/account/:name', name: 'AccountDetail', component: AccountComponent}
])

export class AppComponent {
    public title = 'iDevJS'
}
