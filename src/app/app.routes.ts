import { provideRouter, RouterConfig } from '@angular/router'
import {HomeComponent} from './containers/home.component'
import {NodePostComponent} from './containers/node-post.component'
import {LoginComponent} from './containers/login.component'
import {AccountPageComponent} from './containers/account.component'
import {UserPostPageComponent} from './containers/user-post.component'
import {UserCommentPageComponent} from './containers/user-comment.component'
import {PostPageComponent} from './containers/post-detail.component'
import {PostCreatePageComponent} from './containers/post-create.component'
import {PostEditPageComponent} from './containers/post-edit.component'
import {OAuthCallbackComponent} from './containers/oauth-callback.component'

export const routes: RouterConfig = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'node/:name', component: NodePostComponent },
    { path: 'post/new', component: PostCreatePageComponent },
    { path: 'post/:id/edit', component: PostEditPageComponent },
    { path: 'post/:id', component: PostPageComponent },
    { path: 'u/:name/post', component: UserPostPageComponent},
    { path: 'u/:name/comment', component: UserCommentPageComponent},
    { path: 'u/:name', component: AccountPageComponent },
    { path: 'oauth/callback/:name', component: OAuthCallbackComponent }
]

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
]