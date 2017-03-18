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
// import  {Angular2ImageGalleryModule} from 'angular2-image-gallery';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    FilterPipe,
    Ng2OrderPipe
    //, Angular2ImageGalleryModule

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
