import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule, PolygonManager } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { ModalComponent } from './modal/modal.component';
import { AppRoutingModule } from './/app-routing.module';
import { LocationService } from './location.service';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyByKGT0n2-aD0m9XuVoJoa7tsLjltoBhU0',
      libraries: ["places", "drawing"]
    }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
