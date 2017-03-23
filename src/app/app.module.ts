import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routes} from'./app.router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { FilterPipe } from './filter.pipe';
import { Ng2OrderPipe } from './orderby.pipe';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import  {Angular2ImageGalleryModule} from 'angular2-image-gallery';
import { SelectedCarComponent } from './about/selected-car/selected-car.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    FilterPipe,
    Ng2OrderPipe,
    SelectedCarComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    InfiniteScrollModule,
    Angular2ImageGalleryModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
