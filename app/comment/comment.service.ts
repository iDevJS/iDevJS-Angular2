import {Injectable} from 'angular2/core'
import {Http, Headers, RequestOptions} from 'angular2/http'

@Injectable()
export class CommentService {
    public API_BASE:string = 'http://api.idevjs.com:4000'
    public options
    
    constructor (public http:Http){
       let headers = new Headers({
           'Content-type': 'application/json',
           'Authorization': 'Bearer cfd6275cb154ddb57d18f544544d72475f959964'
       })
       this.options = new RequestOptions({
           headers: headers
       })
    }
    
    getPostComment(id){
        return this.http.get(`${this.API_BASE}/post/${id}/comment`, this.options)
        .map(res => res.json())
    }
    
    addPostComment(id, content){
        let body = JSON.stringify({content: content})
        return this.http.post(`${this.API_BASE}/post/${id}/comment`, body, this.options)
        .map(res => res.json())
    }
    
    getUserComment(id){
        return this.http.get(`${this.API_BASE}/user/${id}/comment`, this.options)
        .map(res => res.json())
    }
}