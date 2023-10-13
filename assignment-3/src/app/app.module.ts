import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { DisplayCategoryComponent } from './display-category/display-category.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {DatabaseServicesService} from "./services/database-services.service";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    AddCategoryComponent,
    ListCategoryComponent,
    DeleteCategoryComponent,
    UpdateCategoryComponent,
    DisplayCategoryComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes,{useHash:true})
  ],
  providers: [DatabaseServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
