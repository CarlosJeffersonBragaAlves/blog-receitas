import { ReceitaModel } from './../../shared/model/receita-model';
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { IngredienteModel } from 'src/app/shared/model/ingrediente-model';
import { ModoDePreparoModel } from 'src/app/shared/model/modo-de-preparo-model';
import { StatusModel } from 'src/app/shared/model/status-model';
import { TipoModel } from 'src/app/shared/model/tipo-model';
import { ReceitaService } from 'src/app/shared/services/receita.service';



@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  receitasSlides: ReceitaModel[] = [];
  receitaSlide: ReceitaModel = {
    id: 0,
    urlImg: '',
    destaque: 0,
    title: '',
    subtitle: '',
    time: '',
    portions: '',
    difficulty: '',

    tipoId: 0,
    tipo: {
      id: 0,
      desc: ''
    },

    statusId: 0,
    status: {
      id: 0,
      desc: ''
    },

    ingredientes: [],
    modoDePreparos:[],

    index: 0
  };
  posicao: number = 0
  slideValue: string = ''
  index: number = 1



  constructor(private ds: DataService,private rs: ReceitaService) { }

  ngOnInit() {
    this.ds.getReceitasSlide<ReceitaModel[]>().subscribe(data =>{
      this.index = 0
      this.receitasSlides = this.rs.addUrlApiImage(data);
      this.receitaSlide = {...data[0], index: 0}
      this.slide(5000,this.receitasSlides);
    })

    //this.item = {...this.slides[0],index:0}

  }

  slide(time:number, item: any[]){
    setInterval(() => {
      if(this.index >= (item.length)){
        this.index = 0
      }
      this.receitaSlide = {...this.receitasSlides[this.index],index: this.index}

      this.index++

    },time)
  }

  selectSlide(i: number){
    this.index = i
    this.receitaSlide = {...this.receitasSlides[i],index: i}
  }




}
