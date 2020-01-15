import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookAddComponent } from './book-add/book-add.component';
import { BookGetComponent } from './book-get/book-get.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { ErrorComponent } from './error/error.component';



const routes: Routes = [
  {
    path: 'book/create',
    component: BookAddComponent
  },
  {
    path: 'book/edit/:id',
    component: BookEditComponent
  },
  {
    path: 'book',
    component: BookGetComponent
  },
  {
    path: '**', 
    component: ErrorComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
