import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParejasComponent } from './parejas/parejas.component';
import { ComercialsComponent } from './comercials/comercials.component';
import { PortraitsComponent } from './portraits/portraits.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';







const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'retrato', component: PortraitsComponent },
  { path: 'parejas', component: ParejasComponent },
  { path: 'producto', component: ComercialsComponent },
  { path: 'contacto', component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
