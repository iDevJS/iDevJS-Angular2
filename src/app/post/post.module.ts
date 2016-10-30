import { NgModule } from '@angular/core'

import { SharedModule } from '../shared/shared.module'
import { PostRoutingModule } from './post-routing.module'

@NgModule({
  imports: [
    SharedModule,
    PostRoutingModule
  ],
  declarations: [],
  providers: []
})
export class PostModule { }