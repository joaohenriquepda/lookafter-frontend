import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule } from '@angular/router';

import { LandingPageModule } from './landing-page/landing-page.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'   

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingPageModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    CollapseModule.forRoot(),
  ],
  providers: [],
  exports: [ModalModule, CollapseModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
