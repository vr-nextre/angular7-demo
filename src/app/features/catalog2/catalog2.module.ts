import {NgModule} from '@angular/core';
import {Catalog2Component} from './catalog2.component';
import {Catalog2FormComponent} from './components/catalog2-form/catalog2-form.component';
import {Catalog2ListComponent} from './components/catalog2-list/catalog2-list.component';
import {RouterModule} from '@angular/router';
import { NoResultsComponent } from './no-results.component';

@NgModule({
  declarations: [
    Catalog2Component,
    Catalog2FormComponent,
    Catalog2ListComponent,
    NoResultsComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: '', component: Catalog2Component},
      {path: 'no-results', component: NoResultsComponent}
      ])
  ],
  providers: []
})
export class Catalog2Module {}
