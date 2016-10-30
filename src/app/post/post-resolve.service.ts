import { Injectable } from '@angular/core'
import {
  Router, Resolve,
  ActivatedRouteSnapshot
} from '@angular/router'
import { Client } from 'idevjs-angular-client'
import { Post } from './post.interface'

@Injectable()
export class PostResolve implements Resolve<Post> {
  constructor(private client: Client, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Promise<Post> | boolean {
    let id = route.params['id']
    return this.client.getPost(id).then(post => {
      if (post) {
        return post
      } else {
        this.router.navigate(['/'])
        return false
      }
    })
  }
}