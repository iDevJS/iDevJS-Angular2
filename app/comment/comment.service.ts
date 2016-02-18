import {Injectable} from 'angular2/core'
import {Http, Headers} from 'angular2/http'

@Injectable()
export class CommentService {
    API_BASE:string = 'http://api.iknew.today:4000/post'
    headers
    
    constructor (public http:Http){
       this.headers = new Headers()
       this.headers.append('Content-type', 'application/json')
       this.headers.append('Authorization', 'Bearer cfd6275cb154ddb57d18f544544d72475f959964')
    }
    
    getPostComment(id){
        return this.http.get(`${this.API_BASE}/${id}/comment`, {
            headers: this.headers
        })
        .map(res => res.json())
    }
    
    getUserComment(id, body){
        return this.http.post(`${this.API_BASE}/${id}/comment`, JSON.stringify(body))
        .map(res => res.json())
    }
}