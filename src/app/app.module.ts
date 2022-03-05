import { SlideComponent } from './home/slide/slide.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';
import {ButtonModule} from 'primeng/button';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAlignLeft, faAlignRight, faStopwatch, faUtensils } from '@fortawesome/free-solid-svg-icons';
import {ImageModule} from 'primeng/image';
import { ChipModule } from 'primeng/chip';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SlideComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,
    ButtonModule,
    FontAwesomeModule,
    ImageModule,
    ChipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(fontawesome: FaIconLibrary){
    fontawesome.addIcons(
      faUtensils, faStopwatch,faAlignRight
    )
  }
}
