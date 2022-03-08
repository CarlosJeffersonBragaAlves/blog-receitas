import { Component, OnInit } from '@angular/core';

interface receita{
  titulo: string;
  subtitulo: string;
  img: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {

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

    // setInterval(() => {
    //   index++
    //   console.log('teste',index)
    // },5000)

  }

}
