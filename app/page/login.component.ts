import {Component} from 'angular2/core'
import {LoginFormComponent} from '../account/login-form.component'

@Component({
    selector: 'idevjs-login',
    templateUrl: 'app/page/login.component.html',
    directives: [LoginFormComponent]
})

export class LoginComponent {
   public title:string = 'Login'
}