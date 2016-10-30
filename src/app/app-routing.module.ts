import { NgModule } from '@angular/core'
import { RouterModule, Routes, PreloadAllModules } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { AuthGuard } from './auth-guard.service'
import { PreloadSelectedModules} from './selective-preload-strategy'

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post', loadChildren: 'app/post/post.module#PostModule' },
  { path: 'u', loadChildren: 'app/user/user.module#UserModule' },
  { path: 'node', loadChildren: 'app/node/node.module#NodeModule' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})

export class AppRoutingModule { }