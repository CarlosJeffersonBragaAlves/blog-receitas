import { DataService } from './../shared/services/data.service';
import { ReceitaService } from './../shared/services/receita.service';
import { Component, OnInit } from '@angular/core';
import { Metadata } from '../shared/model/metadata';
import { OptionsFilter } from '../shared/model/options-filter';
import { ReceitaModel } from '../shared/model/receita-model';
import { PagePrimeNs } from '../home/home.component';

@Component({
  selector: 'app-painel-controle',
  templateUrl: './painel-controle.component.html',
  styleUrls: ['./painel-controle.component.scss']
})
export class PainelControleComponent implements OnInit {

  receitas: ReceitaModel[] = [];
  metadata: Metadata = {
    pageCount: 0,
    totalItemCount: 0,
    pageNumber: 1,
    pageSize: 0,
    hasPreviousPage: false,
    hasNextPage: true,
    isFirstPage: true,
    isLastPage: false,
    firstItemOnPage: 1,
    lastItemOnPage: 1
  };

  destaque: boolean = false


  filter: string = '';
  filtered: boolean =  true
  Portions: string = '';
  Tipo: number  = 0;
  Time: string =  "";
  difficulty: string = ''

  constructor(private rs: ReceitaService, private ds: DataService) { }

  ngOnInit(): void {
    this.getReceitaspage({
      Size: 10,
      Status: 0,
    })
  }

  getReceitaspage(options: OptionsFilter) {
    this.rs.receitasGet(options).subscribe((data) => {
      console.log('receitas', this.receitas)
      let itens = this.rs.addUrlApiImage(data.itens);
      this.receitas = itens.slice();
      this.metadata = data.metadata;
    });
  }

  onPageChange(event: PagePrimeNs) {
    let option: OptionsFilter = {
      Page: event.page + 1,
      Size: 10,
      Status: 0,
    }

    this.getReceitaspage(option)
  }


  filterReceitas(){
    console.log('filter',this.filter)

      let option: OptionsFilter = {
        Size: 9,
        Filter: this.filter,
        Time: this.Time,
        Portions: this.Portions,
        Status: 0,
      }

      this.getReceitaspage(option)

  }

  resetFiltered(){
    if(this.filtered){
      this.Portions = '';
      this.Tipo = 0;
      this.Time =  '' ;
      this.difficulty = ''
    }
    console.log('tempo', this.Time)
  }


  publicarPost(id: number){
   let copyReceitas: ReceitaModel[] = this.receitas.slice()
   let receita: ReceitaModel = copyReceitas.find(data => data.id == id)!
    receita.statusId = 2
    this.ds.postEdit('receitas',receita).subscribe(data => {
      this.getReceitaspage({
        Page: this.metadata.pageNumber,
        Size: 10,
        Status: 0,
      })
    })
  }

  getDestaques(){
    this.destaque = this.destaque == false;
    if(this.destaque){
      this.getReceitaspage({
        Size: 10,
        Status: 2,
        Destaque: 1
      })
    }else{
      this.getReceitaspage({
        Size: 10,
        Status: 0,
        Filter: this.filter
      })
    }
  }



}
