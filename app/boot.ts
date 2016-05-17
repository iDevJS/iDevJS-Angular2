import {bootstrap} from '@angular/platform-browser-dynamic'
import {provide} from '@angular/core'
import { Title } from '@angular/platform-browser'
import {ROUTER_PROVIDERS} from '@angular/router'
import 'rxjs/add/operator/map'
import {HTTP_PROVIDERS, Http} from '@angular/http'
import {AppComponent} from './app.component'
import {Client, AuthConfig} from 'idevjs-angular-client'

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
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

