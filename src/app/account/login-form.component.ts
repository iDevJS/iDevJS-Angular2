import {Component} from '@angular/core'
import {NgForm} from '@angular/common'

@Component({
    selector: 'login-form',
    templateUrl: './login-form.component.html'
})

export class LoginFormComponent {
    model = {
        name: '',
        password: ''
    }

    submitted = false

    onSubmit() {
        this.submitted = true
    }
}