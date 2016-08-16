import {Component, OnInit, OnDestroy} from '@angular/core'
import {Router, ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router'
import {Client} from 'idevjs-angular-client'

@Component({
  templateUrl: './setting.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class SettingPageComponent implements OnInit, OnDestroy {
  private name: string
  private sub: any

  constructor(
    private router: Router,
    private client: Client
  ) { }

  ngOnInit() {

  }
  ngOnDestroy() {
    // this.sub.unsubscribe()
  }

}