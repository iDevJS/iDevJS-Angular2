import {
  isDate,
  isNumber,
  isPresent,
  Date,
  DateWrapper,
  isBlank
} from 'angular2/src/facade/lang'
import {Pipe, PipeTransform, Injectable} from 'angular2/core'
import {DatePipe} from 'angular2/common'

@Pipe({
    name: 'timeago',
    pure: true
})
@Injectable()
export class TimeAgo implements PipeTransform{
    transform(value: any, args: any[]):string{
        if(isBlank(value)) return null
        if(!this.supports(value)){
            console.error('TimeAgo transform faild: Invalid date.')
        }
        if(isNumber(value)){
            value = DateWrapper.fromMillis(value)
        }
        let datePipe = new DatePipe()
        console.log(datePipe.transform(value, ['medium']))
        return this.timeago(value)
    }
    timeago(time){
        const o = {
            second: 1000,
            minute: 60 * 1000,
            hour: 60 * 1000 * 60,
            day: 24 * 60 * 1000 * 60,
            week: 7 * 24 * 60 * 1000 * 60,
            month: 30 * 24 * 60 * 1000 * 60,
            year: 365 * 24 * 60 * 1000 * 60
        }
        var r = Math.round,
        pl = function(v, n) {
            return n + ' ' + v + (n > 1 ? 's' : '') + ' ago'
        },
        ts = new Date().getTime() - new Date(time).getTime(),
        i,
        ii;
        for (i in o) {
            if (r(ts) < o[i]) return pl(ii || 'm', r(ts / (o[ii] || 1)))
            ii = i;
        }
        return pl(i, r(ts / o[i]))
    }
    supports(obj: any): boolean { return isDate(obj) || isNumber(obj) }
}