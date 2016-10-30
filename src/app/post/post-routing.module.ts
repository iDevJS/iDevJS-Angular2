import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { PostComponent } from './post.component'
import { PostPageComponent } from './post-detail.component'
import { PostCreatePageComponent } from './post-create.component'
import { PostEditPageComponent } from './post-edit.component'

import { PostResolve } from './post-resolve.service'
import { AuthGuard } from '../auth-guard.service'

export const routes: Routes = [
  {
    path: '',
    component: PostComponent,
    children: [
      { path: 'new', canActivate: [AuthGuard], component: PostCreatePageComponent },
      { path: ':id/edit', canActivate: [AuthGuard], component: PostEditPageComponent },
      {
        path: ':id', component: PostPageComponent, resolve: {
          post: PostResolve
        }
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [PostResolve]
})

export class PostRoutingModule { }