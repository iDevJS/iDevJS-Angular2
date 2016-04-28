import {bootstrap} from 'angular2/platform/browser'
import {provide} from 'angular2/core'
import {ROUTER_PROVIDERS} from 'angular2/router'
import 'rxjs/add/operator/map'
import {HTTP_PROVIDERS, Http} from 'angular2/http'
import {AppComponent} from './app.component'
import {Client, AuthConfig} from 'idevjs-angular-client/api'

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(Client, {
        useFactory: (http) => {
            return new Client(new AuthConfig({
                baseUrl: 'http://api.idev:4000'
            }), http)
        },
        deps: [Http]
    })
])

