import { PainelControleComponent } from './painel-controle/painel-controle.component';
import { ReceitaComponent } from './receitas/receita/receita.component';
import { ReceitasComponent } from './receitas/receitas.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { FormComponent } from './painel-controle/form/form.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'receitas', component: ReceitasComponent},
  {path: 'receita/:id', component: ReceitaComponent},
  {path: 'control', component: PainelControleComponent},
  {path: 'control/form', component: FormComponent},
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'top'
  // ...any other options you'd like to use
};

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
