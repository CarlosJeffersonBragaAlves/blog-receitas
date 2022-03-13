import { DataService } from './shared/services/data.service';
import { ReceitaComponent } from './receitas/receita/receita.component';
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
import {RadioButtonModule} from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {CardModule} from 'primeng/card';
import { ReceitasComponent } from './receitas/receitas.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {DividerModule} from 'primeng/divider';
import {MatDividerModule} from '@angular/material/divider';
import {MatPaginatorModule} from '@angular/material/paginator';
import {PaginatorModule} from 'primeng/paginator';
import {MatListModule} from '@angular/material/list';
import {CarouselModule} from 'primeng/carousel';
import { HttpClientModule } from '@angular/common/http';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {MatSelectModule} from '@angular/material/select';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import {MatButtonModule} from '@angular/material/button';
import { PainelControleComponent } from './painel-controle/painel-controle.component';
import { FormComponent } from './painel-controle/form/form.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SlideComponent,
    ReceitasComponent,
    ReceitaComponent,
    PainelControleComponent,
    FormComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,
    ButtonModule,
    FontAwesomeModule,
    ImageModule,
    ChipModule,
    RadioButtonModule,
    FormsModule,
    MatCardModule,
    CardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    DividerModule,
    MatDividerModule,
    MatPaginatorModule,
    PaginatorModule,
    MatListModule,
    CarouselModule,
    HttpClientModule,
    ToggleButtonModule,
    MatSelectModule,
    NgxMaskModule.forRoot(maskConfig),
    MatButtonModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(fontawesome: FaIconLibrary){
    fontawesome.addIcons(
      faUtensils, faStopwatch,faAlignRight
    )
  }
}
