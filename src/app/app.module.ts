import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavTopComponent } from './components/nav-top/nav-top.component';
import { ViewHomeComponent } from './components/view-home/view-home.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BotonesRedesComponent } from './components/botones-redes/botones-redes.component';
import { CaruselComponent } from './components/carusel/carusel.component';
import { ProductsHomeComponent } from './components/products-home/products-home.component';

const routes: Routes =[
  {path:'', component:HomeComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavTopComponent,
    ViewHomeComponent,
    HomeComponent,
    BotonesRedesComponent,
    CaruselComponent,
    ProductsHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
