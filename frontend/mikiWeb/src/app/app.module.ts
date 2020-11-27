import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PicturesEditComponent } from './pictures/pictures-edit/pictures-edit.component';
import { RegistrationComponent } from './users/user/auth/registration/registration.component';
import { LoginComponent } from './users/user/auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core-module.module';
import { FooterComponent } from './footer/footer.component';
import { PictureAddComponent } from './users/user/admin-page/picture-add/picture-add.component';
import { AdminPageComponent } from './users/user/admin-page/admin-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PicturesEditComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    FooterComponent,
    PictureAddComponent,
    AdminPageComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
