import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddCategoryComponent} from "./add-category/add-category.component";
import {DeleteCategoryComponent} from "./delete-category/delete-category.component";
import {ListCategoryComponent} from "./list-category/list-category.component";
import {UpdateCategoryComponent} from "./update-category/update-category.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

export const routes: Routes = [
  {path: 'add-category', component:AddCategoryComponent},
  {path: 'delete-category', component:DeleteCategoryComponent},
  {path: 'list-category', component:ListCategoryComponent},
  {path: 'update-category', component:UpdateCategoryComponent},
  {path: '**', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
