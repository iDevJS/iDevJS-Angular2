import {Injectable} from 'angular2/core'
import {POSTS} from './mock-posts'

@Injectable()
export class PostService {
    getPostList(){
        return Promise.resolve(POSTS)
    }
    getPost(id: string) {
        return Promise.resolve(POSTS)
    }
    
}