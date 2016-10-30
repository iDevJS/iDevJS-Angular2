import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { NodePostComponent } from './node-post.component'

export const routes: Routes = [
  { path: 'node/:name', component: NodePostComponent }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class NodeRoutingModule {}