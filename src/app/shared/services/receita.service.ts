import { ReceitaModel } from './../model/receita-model';
import { Paged } from './../model/paged';
import { Injectable } from '@angular/core';
import { OptionsFilter } from '../model/options-filter';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

constructor(private ds: DataService) { }

  receitasGet(options: OptionsFilter){
    return this.ds.getPaged<Paged>('receitas',options)
  }


  addUrlApiImage(data: ReceitaModel[]){
    let itens: ReceitaModel[] = data.slice();
    data.forEach((a,i) => {
      itens[i].urlImg = this.ds.getUrlApi+a.urlImg
    })
    return itens
  }


}
