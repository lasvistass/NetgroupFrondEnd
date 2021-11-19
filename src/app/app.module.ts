import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticoloComponent } from './articolo/articolo.component';
import { ArticoloDataService } from './articolo/articolo-data.service';
import { ArticoloNPComponent } from './articolo-np/articolo-np.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticoloComponent,
    ArticoloNPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ArticoloDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
