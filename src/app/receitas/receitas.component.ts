import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

interface receita{
  titulo: string;
  subtitulo: string;
  img: string
}

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss']
})
export class ReceitasComponent implements OnInit {


  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent!: PageEvent;

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
