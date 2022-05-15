import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonComponent } from './common/common.component';
import { MainHeaderComponent } from './common/main-header/main-header.component';
import { MainFooterComponent } from './common/main-footer/main-footer.component';
import { MainNavComponent } from './common/main-nav/main-nav.component';
import { CategoriasComponent } from './home/categorias/categorias.component';
import { NosotrosComponent } from './home/nosotros/nosotros.component';
import { ContactoComponent } from './home/contacto/contacto.component';
import { MainBannerComponent } from './home/main-banner/main-banner.component';
import { CartaComponent } from './home/carta/carta.component';
import { InicioComponent } from './home/inicio/inicio.component';
import { ChefComponent } from './componentes/staf/staf.component';
import { Menu1Component } from './componentes/menu1/menu1.component';
import { Nosotros2Component } from './componentes/nosotros2/nosotros2.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
    MainHeaderComponent,
    MainFooterComponent,
    MainNavComponent,
    CategoriasComponent,
    NosotrosComponent,
    ContactoComponent,
    MainBannerComponent,
    CartaComponent,
    InicioComponent,
    ChefComponent,
    Menu1Component,
    Nosotros2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FilterPipeModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
