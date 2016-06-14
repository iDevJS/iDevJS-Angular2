import {Component, EventEmitter, Input, Output, OnChanges, ChangeDetectionStrategy} from '@angular/core'

@Component({
    selector: 'ac-tab-header',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <nav class="tab-header">
            <ul>
                <li *ngFor="let tab of tabList; let i=index" class="tab-item" [class.is-active]="selectedIndex === i">
                    <a class="tab-link" (click)="selectTab(tab,i)">{{tab.alias}}</a>
                </li>
            </ul>
        </nav>
    `
})

export class NgcTabHeader implements OnChanges {
    private _tabs
    private _selectedIndex
    selectedTab: any
    @Input() tabList
    @Input()
    set selectedIndex(val: number) {
        this._selectedIndex = val
    }
    get selectedIndex() {
        return this._selectedIndex
    }
    @Output() tabChange = new EventEmitter()
    selectTab(tab, i: number) {
        let prevIndex = this._selectedIndex
        if (i !== prevIndex) {
            this._selectedIndex = i
            this.tabChange.emit(tab)
        }
    }
    ngOnChanges() {

    }
}