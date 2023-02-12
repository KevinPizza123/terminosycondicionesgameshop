import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PagesModule } from './pages/pages.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesComponent } from './pages/pages.component';
import { AuthComponent } from './auth/auth.component';
import { AuthModule } from './auth/auth.module';
import { StaticModule } from './static/static.module';
import { StaticComponent } from './static/static.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NotfoundModule } from './notfound/notfound.module';
import { HttpClientModule } from '@angular/common/http';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { ProximamenteComponent } from './proximamente/proximamente.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { TerminosComponent } from './terminos/terminos.component';




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PagesComponent,
    AuthComponent,
    StaticComponent,
    NotfoundComponent,
    TecnologiaComponent,
    ProximamenteComponent,
    OfertasComponent,
    TerminosComponent
  



  ],
  //imports siempre van los modulos
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    StaticModule,
    NotfoundModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
