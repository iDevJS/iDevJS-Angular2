import {Component, OnInit, Input} from '@angular/core'
import {ROUTER_DIRECTIVES} from '@angular/router'
import {IPost} from './post'
import {Client} from 'idevjs-angular-client'

@Component({
    selector: 'post-detail',
    templateUrl: './post-detail.component.html',
    styleUrls: ['./post-detail.component.css'],
    inputs: ['post'],
    directives: [ROUTER_DIRECTIVES]
})

export class PostDetailComponent implements OnInit {
    public post: IPost
    private sub: any
    private _pid: string
    constructor(private _client: Client) {

    }
    ngOnInit() {
        // this.sub = this.route.params.subscribe(params => {
        //     this._pid = params['id']
        // })
    }
    ngOnDestory() {
        this.sub.unsubscribe()
    }
    like() {

    }
}