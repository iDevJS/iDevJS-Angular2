import { NgModule } from '@angular/core'

import { SharedModule } from '../shared/shared.module'
import { NodeRoutingModule } from './node-routing.module'

@NgModule({
  imports: [
    SharedModule,
    NodeRoutingModule
  ],
  declarations: [],
  providers: []
})
export class NodeModule { }