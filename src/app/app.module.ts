import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './features/users/users.component';
import { UserDetailsComponent } from './features/user-details/user-details.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomeComponent } from './features/home/home.component';
import { CatalogComponent } from './features/catalog/catalog.component';
import { FormsModule } from '@angular/forms';
import {ConfigService} from './services/config.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailsComponent,
    NavbarComponent,
    HomeComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // provider = service = classe da usare senza instanziarla, ci pensa l'injector
  // di angular, che condivide l'istanza tra i componenti e quindi si può passare
  // dati da un component a un altro
  providers: [
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
