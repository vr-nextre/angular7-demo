import {NgModule} from '@angular/core';
import {Catalog2Component} from './catalog2.component';
import {Catalog2FormComponent} from './components/catalog2-form/catalog2-form.component';
import {Catalog2ListComponent} from './components/catalog2-list/catalog2-list.component';

@NgModule({
  declarations: [
    Catalog2Component,
    Catalog2FormComponent,
    Catalog2ListComponent
  ],
  imports: [],
  providers: []
})
export class Catalog2Module {}
