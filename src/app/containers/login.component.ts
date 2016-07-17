import {Component} from '@angular/core'
import {LoginFormComponent} from '../account/login-form.component'
import {NavComponent} from '../components/header/nav.component'

@Component({
    selector: 'idevjs-login',
    templateUrl: './login.component.html',
    directives: [LoginFormComponent, NavComponent]
})

export class LoginComponent {
   public title:string = 'Login'
}