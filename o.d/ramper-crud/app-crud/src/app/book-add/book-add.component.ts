import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { LivrariaService} from '../livraria.service'

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private bs: LivrariaService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      livro_name: ['', Validators.required ],
      autor_name: ['', Validators.required ],
      valor_number: ['', Validators.required ]
    });
  }

  addLivraria(livro_name, autor_name, valor_number){
    this.bs.addLivraria(livro_name, autor_name, valor_number);
  }

  ngOnInit() {
  }
}
