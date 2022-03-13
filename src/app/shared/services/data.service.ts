import { ReceitaModel } from './../model/receita-model';
import { OptionsFilter } from './../model/options-filter';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = 'https://localhost:44379/';
  private headers!: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  getById<T>(coll: string, id: string) {
    return this.http.get<T>(`${this.url}api/${coll}/${id}`);
  }

  getByRelacionado<T>(coll: string, id: string,tipo: string) {
    return this.http.get<T>(`${this.url}api/${coll}/relacionado/${id}/${tipo}`);
  }

  getPaged<T>(coll: string, options?: OptionsFilter){
    if(!options)[
      options = {
        Filter: '',
        Limit: 20,
        Page: 1,
        Portions: '',
        Size: 10,
        Status: 0,
        Time: '',
        Tipo: 0
       }
    ]

    return this.http.post<T>(`${this.url}api/${coll}/paged`,options);
  }

  getReceitasSlide<T>(){
    return this.http.get<T>(`${this.url}api/receitas/slide`);
  }

  postEdit<T>(coll: string, options: ReceitaModel){
    let receita = options;
    receita.urlImg = this.removeUrlImage(options?.urlImg+'')
    return this.http.put<T>(`${this.url}api/${coll}/${options?.id}`,options);
  }

  get getUrlApi(){
    return this.url
  }

  removeUrlImage(url: string){
    return url.replace(this.getUrlApi,'')
  }

}
