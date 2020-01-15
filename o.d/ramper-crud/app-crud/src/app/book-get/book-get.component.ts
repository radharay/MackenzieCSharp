import { Component, OnInit } from '@angular/core';
import {LivrariaService} from '../livraria.service';
import Livraria from '../Livraria';

@Component({
  selector: 'app-book-get',
  templateUrl: './book-get.component.html',
  styleUrls: ['./book-get.component.css']
})
export class BookGetComponent implements OnInit {

  listabook: Livraria[];

  constructor(private bs: LivrariaService) { }

  ngOnInit() {
    this.bs
      .getLivraria()
      .subscribe((data: Livraria[]) => {
        this.listabook = data;
    });
  }
  deleteLivraria(id) {
    this.bs.deleteLivraria(id).subscribe(res => {
      console.log('Deleted');
    });
  }
}