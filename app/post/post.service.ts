import {Injectable} from 'angular2/core'
import {Http} from 'angular2/http'
import {POSTS} from './mock-posts'

@Injectable()
export class PostService {
    constructor (public http:Http){
        
    }
    getPostList(){
        this.http.get('http://api.iknew.today:4000/post?access_token=cfd6275cb154ddb57d18f544544d72475f959964')
        .map(res => res.json())
        .subscribe(
            res => console.log(res)
        )
        return Promise.resolve(POSTS)
    }
    getPost(id: string) {
        return Promise.resolve(POSTS)
    }
    
}