import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.scss']
})
export class ReceitaComponent implements OnInit {

  ingredientes: string[] = [
    '1 colher (sopa) de azeite',
    'meia cebola ralada',
    'meia xícara (chá) de arroz',
    '1 colher (chá) de sal',
    'meia xícara (chá) de brócolis',
    '1 tomate picado',
    '1 xícara (chá) de água',
    '1 pote de IMPACT® Banana',
    '2 colheres (sopa) de queijo ralado',
  ]

  modoPreparos: string[] = [
    'Em uma panela funda, aqueça o azeite em fogo baixo e refogue a cebola, o arroz, o sal, o brócolis e o tomate. Misture bem e deixe dourar.',
    'Junte a água misture bem e cozinha.',
    'Adicione o IMPACT Banana e o queijo e misture bem.',
    'Sirva',
  ]

  constructor() { }

  ngOnInit() {
  }

}
