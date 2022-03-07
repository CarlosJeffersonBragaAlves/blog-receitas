import { Component, OnInit } from '@angular/core';

interface receita{
  titulo: string;
  subtitulo: string;
  img: string
}

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


  items: string[] = [
    '','','','','',''
  ]

  receita: receita = {
    titulo: 'Escondidinho de Frango e Mandioquinha',
    subtitulo: 'Receita de Escondidinho de Frango e Mandioquinha delicioso feito com IMPACT Banana, peito de frango desfiado, tomate e queijo parmesão',
    img: 'https://images.aws.nestle.recipes/resized/05efe97045a4c8020a1fb01f8b073a49_escondidinho-frango-mandioquinha-receitas-nestle_1200_600.jpg'
  }

  constructor() { }

  ngOnInit() {
  }

}
