import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgsRevealModule } from 'ng-scrollreveal';
import { Routes, RouterModule } from '@angular/router';

import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';

import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './home/banner/banner.component';
import { MainSearchComponent } from './home/main-search/main-search.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'results', component: SearchResultsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    MainSearchComponent,
    CategoriesComponent,
    FooterComponent,
    HomeComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    MalihuScrollbarModule.forRoot(),
    NgsRevealModule.forRoot(),
    NgxCarouselModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
