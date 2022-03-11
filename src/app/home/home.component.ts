import { OptionsFilter } from './../shared/model/options-filter';
import { Metadata } from './../shared/model/metadata';
import { ReceitaModel } from './../shared/model/receita-model';
import { ReceitaService } from './../shared/services/receita.service';
import { DataService } from './../shared/services/data.service';
import { Component, OnInit } from '@angular/core';

export interface PagePrimeNs {
  first: number;
  page: number;
  pageCount: number;
  rows: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  receitasSlide: ReceitaModel[] = []
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

  url: string =
    'C://Projetos_ASP.Net//blog-receitas-api//wwwroot//upload//receita_01.jpg';

  constructor(private rs: ReceitaService, private ds: DataService) {}

  ngOnInit() {
    // setInterval(() => {
    //   index++
    //   console.log('teste',index)
    // },5000)

    this.getReceitaspage({});
    this.getReceitasSlide()
  }

  getReceitaspage(options: OptionsFilter) {
    this.rs.receitasGet(options).subscribe((data) => {
      this.receitas = this.rs.addUrlApiImage(data.itens);
      this.metadata = data.metadata;
    });
  }

  getReceitasSlide(){
    this.ds.getReceitasSlide<ReceitaModel[]>().subscribe(data =>{
      this.receitasSlide = data.slice();
      console.log('slide', data)
    })
  }

  onPageChange(event: PagePrimeNs) {
    let option: OptionsFilter = {
      Page: event.page + 1,
    }

    this.getReceitaspage(option)
  }
}
