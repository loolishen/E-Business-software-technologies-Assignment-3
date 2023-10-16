import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AddCategoryComponent} from "./add-category/add-category.component";
import {DeleteCategoryComponent} from "./delete-category/delete-category.component";
import {ListCategoryComponent} from "./list-category/list-category.component";
import {UpdateCategoryComponent} from "./update-category/update-category.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {DisplayCategoryComponent} from "./display-category/display-category.component";
import {TextToSpeechComponent} from "./text-to-speech/text-to-speech.component";
import {StatsG1Component} from "./stats-g1/stats-g1.component";
import {InvalidDataComponent} from "./invalid-data/invalid-data.component";
/*
import { AddEventComponent } from './add-event/add-event.component';
import { ListEventsComponent } from './list-event/list-event.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { DisplayEventComponent } from './display-event/display-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { TranslationComponent } from './translation/translation.component'; // New translation component
import { StatisticsComponent } from './statistics/statistics.component'; // New stats component
*/
export const routes: Routes = [
  { path: 'add-category', component: AddCategoryComponent },
  { path: 'delete-category', component: DeleteCategoryComponent },
  { path: 'invalid-data', component: InvalidDataComponent },
  { path: 'stats-g1', component: StatsG1Component },
  { path: 'list-category', component: ListCategoryComponent },
  { path: 'update-category', component: UpdateCategoryComponent },
  { path: 'display-category/:id', component: DisplayCategoryComponent },
  { path: 'text-to-speech', component: TextToSpeechComponent },
  { path: '**', component: PageNotFoundComponent }

<<<<<<< HEAD
  /*{ path: 'add-event', component: AddEventComponent },
  { path: 'list-event', component: ListEventsComponent },
  { path: 'delete-event', component: DeleteEventComponent },
  { path: 'display-event', component: DisplayEventComponent },
  { path: 'update-event', component: UpdateEventComponent },
  { path: 'translate', component: TranslationComponent }, // Route for translation component
  { path: 'stats', component: StatisticsComponent } // Route for statistics component

   */
=======
  { path: 'lishen/add-event', component: AddEventComponent },
  { path: 'lishen/list-event', component: ListEventsComponent },
  { path: 'lishen/delete-event', component: DeleteEventComponent },
  { path: 'lishen/display-event', component: DisplayEventComponent },
  { path: 'lishen/update-event', component: UpdateEventComponent },
  { path: 'lishen/translate', component: TranslationComponent }, // Route for translation component
  { path: 'lishen/stats', component: StatisticsComponent } // Route for statistics component
>>>>>>> 294119960df036bc1986c920b7c1ff9656ae7b17
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
