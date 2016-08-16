import {bootstrap} from '@angular/platform-browser-dynamic'
import {provide, enableProdMode} from '@angular/core'
import {Title} from '@angular/platform-browser'
import 'rxjs/add/operator/map'
import {HTTP_PROVIDERS, Http} from '@angular/http'
import {AppComponent} from './app/app.component'
import {appRouterProviders} from './app/app.routes'
import {AuthService} from './app/auth.service'
import {AuthGuard} from './app/auth.guard'
import {Client, AuthConfig} from 'idevjs-angular-client'
require('../app.css')

if (process.env.ENV === 'production') {
    enableProdMode()
}

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    appRouterProviders,
    Title,
    AuthService,
    AuthGuard,
    provide(Client, {
        useFactory: (http) => {
            return new Client(new AuthConfig({
                baseUrl: 'http://api.idev:4000'
            }), http)
        },
        deps: [Http]
    })
])

