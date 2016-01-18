import {bootstrap} from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router'
import {PostService} from './posts/post.service'
import {AppComponent} from './app.component'

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    PostService
])

