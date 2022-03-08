import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public url = 'https://localhost:44379/';

  constructor(private http: HttpClient) {}

  getById<T>(coll: string, id: string) {
    return this.http.get<T>(`${this.url}api/${coll}/${id}`);
  }
}
