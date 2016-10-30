import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { UserComponent } from './user.component'
import { AccountPageComponent } from './account.component'
import { UserPostPageComponent } from './user-post.component'
import { UserCommentPageComponent } from './user-comment.component'

export const routes: Routes = [{
  path: '',
  component: UserComponent,
  children: [
    { path: ':name/post', component: UserPostPageComponent },
    { path: ':name/comment', component: UserCommentPageComponent },
    { path: ':name', component: AccountPageComponent }]
}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }