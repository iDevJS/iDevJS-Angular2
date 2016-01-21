import {Component} from 'angular2/core'
import {NgForm} from 'angular2/common'

@Component({
    selector: 'login-form',
    templateUrl: 'app/account/login-form.component.html'
})

export class LoginFormComponent {
    model = {
        name: '',
        password: ''
    }
    
    submitted = false
    
    onSubmit(){
        this.submitted = true
    }
}