import {Component} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {NavComponent} from './header/nav.component'
import {HomeComponent} from './page/home.component'
import {LoginComponent} from './page/login.component'
import {AccountPageComponent} from './page/account.component'
import {PostPageComponent} from './page/post-detail.component'
import {PostEditPageComponent} from './page/post-edit.component'

@Component({
    selector: 'idevjs-app',
    templateUrl: 'app/app.component.html',
    // styleUrls: ['app/app.component.css'],
    directives: [NavComponent, HomeComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/', name: 'Home', component: HomeComponent, useAsDefault: true},
    {path: '/login', name: 'Login', component: LoginComponent},
    // {path: '/signup', name: 'Signup', component: SignupComponent},
    // {path: '/explore', name: 'Explore', component: PostListComponent},
    {path: '/post/:id', name: 'PostDetail', component: PostPageComponent},
    {path: '/post/:id/edit', name: 'PostEdit', component: PostEditPageComponent},
    {path: '/u/:id', name: 'AccountPage', component: AccountPageComponent},
    // {path: '/account/:name', name: 'AccountDetail', component: AccountComponent}
])

export class AppComponent {
    public title = 'iDevJS'
}
