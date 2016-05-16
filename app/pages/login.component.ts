import {Component} from '@angular/core'
import {LoginFormComponent} from '../account/login-form.component'
import {NavComponent} from '../header/nav.component'

@Component({
    selector: 'idevjs-login',
    templateUrl: 'app/pages/login.component.html',
    directives: [LoginFormComponent, NavComponent]
})

export class LoginComponent {
   public title:string = 'Login'
}