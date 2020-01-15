import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LivrariaService {

  uri ='/livraria';
  versionuri = '/getversion';                                                   

  constructor(private http: HttpClient) { }

  addLivraria(livro_name, autor_name, valor_number){
    const obj = {
      livro_name: livro_name,
      autor_name: autor_name,
      valor_number: valor_number
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Feito'));
  }

  getLivraria() {
    return this
           .http
           .get(`${this.uri}`);
  }
  editLivraria(id){
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }
  updateLivraria(livro_name, autor_name, valor_number, id) {

    const obj = {
        livro_name: livro_name,
        autor_name: autor_name,
        valor_number: valor_number
      };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }
  deleteLivraria(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}