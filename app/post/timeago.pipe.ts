import {
  isDate,
  isNumber,
  isPresent,
  Date,
  DateWrapper,
  CONST,
  isBlank,
  FunctionWrapper
} from 'angular2/src/facade/lang'
import {Pipe, PipeTransform, Injectable} from 'angular2/core'
import {DatePipe} from 'angular2/common'

@Pipe({
    name: 'timeago',
    pure: true
})
@Injectable()
export class DateEnhancePipe implements DatePipe{
    transform(value: any, args: any[]):string{
        console.log(args[0])
        return 'ab'
    }
    timeago(time){
        const l = {
            second: 1000,
            minute: 60 * 1000,
            hour: 60 * 1000 * 60,
            day: 24 * 60 * 1000 * 60,
            week: 7 * 24 * 60 * 1000 * 60,
            month: 30 * 24 * 60 * 1000 * 60,
            year: 365 * 24 * 60 * 1000 * 60
        }
        
    }
    supports:(obj:any) => boolean
}