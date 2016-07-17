import {bootstrap} from '@angular/platform-browser-dynamic'
import {provide, enableProdMode} from '@angular/core'
import {Title} from '@angular/platform-browser'
import 'rxjs/add/operator/map'
import {HTTP_PROVIDERS, Http} from '@angular/http'
import {AppComponent} from './app/app.component'
import {APP_ROUTER_PROVIDERS} from './app/app.routes'
import {Client, AuthConfig} from 'idevjs-angular-client'

if (process.env.ENV === 'production') {
    enableProdMode()
}

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    APP_ROUTER_PROVIDERS,
    Title,
    provide(Client, {
        useFactory: (http) => {
            return new Client(new AuthConfig({
                baseUrl: 'http://api.idev:4000'
            }), http)
        },
        deps: [Http]
    })
])

