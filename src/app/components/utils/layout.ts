import {Directive, Input} from '@angular/core'
import { TemplateRef, ViewContainerRef } from '@angular/core'

@Directive({ selector: 'ac-layout-align' })

class LayOutDirective {
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) { }
    @Input()
    set layoutAlign(val: any) {

    }
}   