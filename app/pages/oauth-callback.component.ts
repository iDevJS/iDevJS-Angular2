import {Component, OnInit} from '@angular/core'
import {OnActivate, Router, RouteSegment} from '@angular/router'

@Component({
    template: `redirecting`
})

export class OAuthCallbackComponent implements OnActivate{
   public server:string
   constructor(private _router: Router){
    //    this._router.navigate(['Home'])
   } 
   
   routerOnActivate(curr: RouteSegment){
       this.server = curr.getParam('name')
       localStorage.setItem(`${this.server}_token`, 'cfd6275cb154ddb57d18f544544d72475f959964')
   }
}