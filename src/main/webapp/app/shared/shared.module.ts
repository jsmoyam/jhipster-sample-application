import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PrototipoSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [PrototipoSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [PrototipoSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PrototipoSharedModule {
  static forRoot() {
    return {
      ngModule: PrototipoSharedModule
    };
  }
}
