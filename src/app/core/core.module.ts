import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf
} from '@angular/core'
import { CommonModule } from '@angular/common'
import { Client, AuthConfig } from 'idevjs-angular-client'
import { Http } from '@angular/http';

@NgModule({
  imports: [CommonModule],
  declarations: [Client],
  exports: [Client],
  providers: [Client]
})
export class CoreModule {
  static forRoot(config: Client): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: Client, useFactory: () => {
            return new Client(new AuthConfig({
              baseUrl: 'http://idev:8080'
            }), Http)
          }
        }
      ]
    };
  }
}