import {Injectable} from 'angular2/core'
import {Http, Headers, RequestOptions} from 'angular2/http'

@Injectable()
export class PostService {
    API_BASE:string = 'http://api.idevjs.com:4000'
    options
    
    constructor (public http:Http){
       let headers = new Headers({
           'Content-type': 'application/json',
           'Authorization': 'Bearer cfd6275cb154ddb57d18f544544d72475f959964'
       })
       this.options = new RequestOptions({
           headers: headers
       })
    }
    getPostList(){
        return this.http.get(`${this.API_BASE}/post`, this.options)
        .map(res => res.json())
    }
    getNodePostList(node){
        return this.http.get(`${this.API_BASE}/node/${node}/post`, this.options)
        .map(res => res.json())
    }
    getPost(id: string) {
        return this.http.get(`${this.API_BASE}/post/${id}`, this.options)
        .map(res => res.json())
    }
    getPostRaw(id:string){
        return this.http.get(`${this.API_BASE}/post/${id}?content_format=markdown`, this.options)
        .map(res => res.json())
    }
    getUserPostList(id:string){
        return this.http.get(`${this.API_BASE}/user/${id}/post`, this.options)
        .map(res => res.json())
    }
    updatePost(id, data){
        let body = JSON.stringify(data)
        return this.http.post(`${this.API_BASE}/post/${id}`, body, this.options)
        .map(res => res.json())
    }
}