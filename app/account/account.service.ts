import {Injectable} from 'angular2/core'
import {USERS} from './mock-users'

@Injectable()
export class AccountService {
    getUser(){
        return Promise.resolve(USERS)
    } 
}