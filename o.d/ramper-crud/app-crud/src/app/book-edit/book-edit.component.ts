import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { LivrariaService } from '../livraria.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  livraria: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: LivrariaService,
    private fb: FormBuilder) {
      this.createForm();
 }
 createForm() {
  this.angForm = this.fb.group({
      livro_name: ['', Validators.required ],
      autor_name: ['', Validators.required ],
      valor_number: ['', Validators.required ]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.bs.editLivraria(params['id']).subscribe(res => {
          this.livraria = res;
      });
    });
  }
  updateLivraria(livro_name, autor_name, valor_number) {
    this.route.params.subscribe(params => {
       this.bs.updateLivraria(livro_name, autor_name, valor_number, params['id']);
       this.router.navigate(['livraria']);
 });
}
};