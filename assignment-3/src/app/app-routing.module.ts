import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AddCategoryComponent} from "./add-category/add-category.component";
import {DeleteCategoryComponent} from "./delete-category/delete-category.component";
import {ListCategoryComponent} from "./list-category/list-category.component";
import {UpdateCategoryComponent} from "./update-category/update-category.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

import { AddEventComponent } from './add-event/add-event.component';
import { ListEventsComponent } from './list-event/list-event.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { DisplayEventComponent } from './display-event/display-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { TranslationComponent } from './translation/translation.component'; // New translation component
import { StatisticsComponent } from './statistics/statistics.component'; // New stats component

export const routes: Routes = [
  {path: 'add-category', component:AddCategoryComponent},
  {path: 'delete-category', component:DeleteCategoryComponent},
  {path: 'list-category', component:ListCategoryComponent},
  {path: 'update-category', component:UpdateCategoryComponent},
  {path: '**', component:PageNotFoundComponent},

  { path: 'lishen/add-event', component: AddEventComponent },
  { path: 'lishen/list-event', component: ListEventsComponent },
  { path: 'lishen/delete-event', component: DeleteEventComponent },
  { path: 'lishen/display-event', component: DisplayEventComponent },
  { path: 'lishen/update-event', component: UpdateEventComponent },
  { path: 'lishen/translate', component: TranslationComponent }, // Route for translation component
  { path: 'lishen/stats', component: StatisticsComponent } // Route for statistics component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
