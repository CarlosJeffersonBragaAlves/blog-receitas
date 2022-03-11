import { ReceitaService } from './../../shared/services/receita.service';
import { ReceitaModel } from './../../shared/model/receita-model';
import { DataService } from './../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface receita{
  titulo: string;
  subtitulo: string;
  img: string
}

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.scss']
})
export class ReceitaComponent implements OnInit {

  receita!: ReceitaModel;

  page: number = 0

  recomendacaoReceitas: ReceitaModel[] = []

  constructor(private ds: DataService, private rs: ReceitaService ,private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      let id: string = params['id'] + ''
      console.log('id',id)

      this.ds.getById<ReceitaModel>('receitas',id).subscribe(data =>{
        this.receita = {...data, urlImg: this.ds.getUrlApi+data.urlImg}

        this.ds.getByRelacionado<ReceitaModel[]>('receitas',data.id.toString(),data.tipoId.toString()).subscribe(data =>{
          this.recomendacaoReceitas = this.rs.addUrlApiImage(data)
          this.page = 0
        })

      })

    });

  }

}
