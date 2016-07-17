import {Component, OnInit, OnDestroy} from '@angular/core'
import {Router, ActivatedRoute} from '@angular/router'

@Component({
    template: `redirecting`
})

export class OAuthCallbackComponent implements OnInit, OnDestroy {
    public server: string
    private sub: any
    constructor(private route: ActivatedRoute, private router: Router) {
        //    this._router.navigate(['Home'])
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.server = params['name']
            localStorage.setItem(`${this.server}_token`, 'cfd6275cb154ddb57d18f544544d72475f959964')
        })
    }
    ngOnDestroy() {
        this.sub.unSubscribe()
    }
}