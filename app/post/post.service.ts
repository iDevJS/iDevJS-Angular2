import {Injectable} from 'angular2/core'
import {Http, Headers} from 'angular2/http'

@Injectable()
export class PostService {
    API_BASE:string = 'http://api.iknew.today:4000/post'
    headers
    
    constructor (public http:Http){
       this.headers = new Headers()
       this.headers.append('Authorization', 'Bearer cfd6275cb154ddb57d18f544544d72475f959964')
    }
    getPostList(){
        return this.http.get(this.API_BASE, {
            headers: this.headers
        })
        .map(res => res.json())
    }
    getPost(id: string) {
        return this.http.get(`${this.API_BASE}/${id}`, {
            headers: this.headers
        })
        .map(res => res.json())
    }
    
}