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

  constructor(private rs: ReceitaService) { }

  ngOnInit(): void {
    this.getReceitaspage({
      Size: 10
    })
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
      Size: 10
    }

    this.getReceitaspage(option)
  }
}
