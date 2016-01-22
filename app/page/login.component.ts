import {Component} from 'angular2/core'
import {LoginFormComponent} from '../account/login-form.component'
import {NavComponent} from '../header/nav.component'

@Component({
    selector: 'idevjs-login',
    templateUrl: 'app/page/login.component.html',
    directives: [LoginFormComponent, NavComponent]
})

export class LoginComponent {
   public title:string = 'Login'
}