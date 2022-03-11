import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PagePrimeNs } from '../home/home.component';
import { Metadata } from '../shared/model/metadata';
import { OptionsFilter } from '../shared/model/options-filter';
import { ReceitaModel } from '../shared/model/receita-model';
import { DataService } from '../shared/services/data.service';
import { ReceitaService } from '../shared/services/receita.service';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss']
})
export class ReceitasComponent implements OnInit {

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

filter: string = '';

filtered: boolean =  true

  Portions: string = '';
  Tipo: number  = 0;
  Time: string =  "";
  difficulty: string = ''


  constructor(private rs: ReceitaService, private ds: DataService) { }

  ngOnInit() {
    this.getReceitaspage({
      Size: 9
    });
  }


  getReceitaspage(options: OptionsFilter) {
    this.rs.receitasGet(options).subscribe((data) => {
      this.receitas = this.rs.addUrlApiImage(data.itens);
      this.metadata = data.metadata;
    });
  }

  onPageChange(event: PagePrimeNs) {
    let option: OptionsFilter = {
      Page: event.page + 1,
      Size: 9
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
}
