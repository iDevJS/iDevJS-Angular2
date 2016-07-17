import {Injectable} from '@angular/core'
import {USERS} from './mock-users'

@Injectable()
export class AccountService {
    getUser(){
        return Promise.resolve(USERS)
    } 
}