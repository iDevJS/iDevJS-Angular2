import {Component} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {NavComponent} from './header/nav.component'
import {HomeComponent} from './pages/home.component'
import {NodePostComponent} from './pages/node-post.component'
import {LoginComponent} from './pages/login.component'
import {AccountPageComponent} from './pages/account.component'
import {PostPageComponent} from './pages/post-detail.component'
import {PostEditPageComponent} from './pages/post-edit.component'

@Component({
    selector: 'idevjs-app',
    templateUrl: 'app/app.component.html',
    // styleUrls: ['app/app.component.css'],
    directives: [NavComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/', name: 'Home', component: HomeComponent, useAsDefault: true},
    {path: '/login', name: 'Login', component: LoginComponent},
    // {path: '/signup', name: 'Signup', component: SignupComponent},
    // {path: '/explore', name: 'Explore', component: PostListComponent},
    {path: '/node/:name', name: 'NodePost', component: NodePostComponent},
    {path: '/post/:id', name: 'PostDetail', component: PostPageComponent},
    {path: '/post/:id/edit', name: 'PostEdit', component: PostEditPageComponent},
    {path: '/u/:id', name: 'AccountPage', component: AccountPageComponent},
    // {path: '/u/:name', name: 'AccountPage', component: AccountPageComponent}
])

export class AppComponent {
    public title = 'iDevJS'
}