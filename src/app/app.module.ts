import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgsRevealModule} from 'ng-scrollreveal';

import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';

import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { MainSearchComponent } from './main-search/main-search.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    MainSearchComponent,
    CategoriesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MalihuScrollbarModule.forRoot(),
    NgsRevealModule.forRoot(),
    NgxCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
