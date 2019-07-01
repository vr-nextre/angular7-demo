import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersComponent} from './features/users/users.component';
import {UserDetailsComponent} from './features/user-details/user-details.component';
import {HomeComponent} from './features/home/home.component';
import {CatalogComponent} from './features/catalog/catalog.component';
// import {Catalog2Component} from './features/catalog2/catalog2.component';
import {ContactsComponent} from './features/contacts/contacts.component';
// import {LoginComponent} from './features/login/login.component';

// approccio misto componenti e lazy, meglio sempre fare tutto lazy però

const routes: Routes = [
  {path: 'devices', component: CatalogComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/:id', component: UserDetailsComponent},
  {path: 'home', component: HomeComponent},
  // {path: 'catalog', component: Catalog2Component},
  {path: 'catalog', loadChildren: './features/catalog2/catalog2.module#Catalog2Module'},
  {path: 'contacts', component: ContactsComponent},
  // {path: 'login', component: LoginComponent}, // abilito il lazy loading caricamndo un modulo solo quando serve
  {path: 'login', loadChildren: './features/login/login.module#LoginModule'}, // nome file senza estensione#nome classe da caricare
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
