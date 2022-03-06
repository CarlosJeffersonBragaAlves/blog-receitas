import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  imagem: string = ''
  posicao: number = 0

  constructor() { }

  ngOnInit() {
    this.imagem = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.emania.com.br%2Fdireitos-autorais-aspectos-legais-da-fotografia%2F&psig=AOvVaw0JsX6j8ch6VM-ESF3-6Pk1&ust=1646537647438000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNC20u-ErvYCFQAAAAAdAAAAABAD"


    setInterval(() => {
      this.posicao++
      console.log('posicao',this.posicao)
      if(this.posicao >= 4){
        this.posicao = 0;
      }

    },5000)
  }

}
