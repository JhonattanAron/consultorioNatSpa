import { NgModule , Renderer2} from '@angular/core';
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
import { CardInfoComponent } from './components/card-info/card-info.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ProductosComponent } from './components/productos/productos.component';
import { CaruselProductsComponent } from './components/carusel-products/carusel-products.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { CarritoDeComprasComponent } from './components/carrito-de-compras/carrito-de-compras.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatBadgeModule} from '@angular/material/badge';
import { NosotrosComponent } from './components/nosotros/nosotros.component';




const routes: Routes =[
  {path:'', component:HomeComponent},
  {path:'productos',component:ProductsPageComponent},
  {path:'inicio',redirectTo:''}
]
@NgModule({
  declarations: [
    AppComponent,
    NavTopComponent,
    ViewHomeComponent,
    HomeComponent,
    BotonesRedesComponent,
    CaruselComponent,
    ProductsHomeComponent,
    CardInfoComponent,
    ProductsPageComponent,
    ProductosComponent,
    CaruselProductsComponent,
    CarritoDeComprasComponent,
    NosotrosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    MatBadgeModule,
    NgImageSliderModule,
    
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
