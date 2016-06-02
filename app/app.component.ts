import {Component} from '@angular/core'
import {Routes, ROUTER_DIRECTIVES} from '@angular/router'
import {NavComponent} from './header/nav.component'
import {HomeComponent} from './pages/home.component'
import {NodePostComponent} from './pages/node-post.component'
import {LoginComponent} from './pages/login.component'
import {AccountPageComponent} from './pages/account.component'
import {UserPostPageComponent} from './pages/user-post.component'
import {UserCommentPageComponent} from './pages/user-comment.component'
import {PostPageComponent} from './pages/post-detail.component'
import {PostCreatePageComponent} from './pages/post-create.component'
import {PostEditPageComponent} from './pages/post-edit.component'
import {OAuthCallbackComponent} from './pages/oauth-callback.component'

@Component({
    selector: 'idevjs-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [NavComponent, ROUTER_DIRECTIVES]
})

@Routes([
    { path: '/', component: HomeComponent },
    { path: '/login', component: LoginComponent },
    // {path: '/signup',  component: SignupComponent},
    // {path: '/explore',  component: PostListComponent},
    { path: '/node/:name', component: NodePostComponent },
    { path: '/post/new', component: PostCreatePageComponent },
    { path: '/post/:id/edit', component: PostEditPageComponent },
    { path: '/post/:id', component: PostPageComponent },
    { path: '/u/:name/post', component: UserPostPageComponent},
    { path: '/u/:name/comment', component: UserCommentPageComponent},
    { path: '/u/:name', component: AccountPageComponent },
    { path: '/oauth/callback/:name', component: OAuthCallbackComponent }
])

export class AppComponent {
    public title = 'iDevJS'
}