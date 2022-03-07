import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  posicao: number = 0
  teste: string[] = ['01','02','03','04']
  slideValue: string = ''
  index: number = 1
  item!: { titulo: string; subtitulo: string, img: string, index: number };
  slides: {titulo: string,subtitulo: string,img: string}[] = [
    {
      titulo: 'Arroz Cremoso de Legumes',
      subtitulo: 'Receita De Arroz Cremoso De Legumes Delicioso Feito Com Impact Banana, Banana-da-terra E Legumes',
      img: 'https://images.aws.nestle.recipes/resized/c86f80b4a040f4ae1225a629a0856d4c_arroz-cremoso-legumes-receitas-nestle_1200_600.jpg'
    },
    {
      titulo: 'Escondidinho de Frango e Mandioquinha',
      subtitulo: 'Receita de Escondidinho de Frango e Mandioquinha delicioso feito com IMPACT Banana, peito de frango desfiado, tomate e queijo parmesão',
      img: 'https://images.aws.nestle.recipes/resized/05efe97045a4c8020a1fb01f8b073a49_escondidinho-frango-mandioquinha-receitas-nestle_1200_600.jpg'
    },
    {
      titulo: 'Carne Moída Cremosa com Batata',
      subtitulo: 'Receita de Carne Moída Cremosa e Batata deliciosa com IMPACT Banana, batata, extrato de tomate e cebolinha verde',
      img: 'https://images.aws.nestle.recipes/resized/3cc0edd266542fdce05ebb8aeaada536_carne-moida-cremosa-batata-receitas-nestle_1200_600.jpg'
    },
    {
      titulo: 'Strogonoff de Carne com Impact',
      subtitulo: 'Receita de Strogonoff de Carne delicioso feito com IMPACT Baunilha, contra-filé e cogumelos',
      img: 'https://images.aws.nestle.recipes/resized/9e1f8e0ed6c4df8098d7b8e647629627_strogonoff-carne-receitas-nestle_1200_600.jpg'
    },
  ]

  constructor() { }

  ngOnInit() {
    this.item = {...this.slides[0],index:0}
    this.slide(5000,this.slides)

  }

  slide(time:number, item: any[]){
    setInterval(() => {
      if(this.index >= (item.length)){
        this.index = 0
      }
      this.item = {...this.slides[this.index],index: this.index}

      this.index++

    },time)
  }

  selectSlide(i: number){
    this.index = i
    this.item = {...this.slides[i],index: i}
  }


}
