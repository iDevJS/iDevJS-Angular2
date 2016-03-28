import {Component, OnInit} from 'angular2/core'
import {RouteParams, Router} from 'angular2/router'

@Component({
    template: `redirecting`
})

export class OAuthCallbackComponent {
   public server:string
   constructor(private _router: Router, private _routeParams: RouteParams){
       this.server = this._routeParams.get('name')
       localStorage.setItem(`${this.server}_token`, 'cfd6275cb154ddb57d18f544544d72475f959964')
    //    this._router.navigate(['Home'])
   } 
}