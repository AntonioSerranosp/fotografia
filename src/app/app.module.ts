import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//rutas
import { AppRoutingModule } from './app-routing.module';
//componentes
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PortraitsComponent } from './portraits/portraits.component';
import { ParejasComponent } from './parejas/parejas.component';
import { ComercialsComponent } from './comercials/comercials.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FotosService } from './fotos.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PortraitsComponent,
    ParejasComponent,
    ComercialsComponent,
    HomeComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ 
    FotosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
