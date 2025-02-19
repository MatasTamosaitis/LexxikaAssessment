import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from '../login/login.component';
import { DocumentListComponent } from '../document-list/document-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule, AppComponent, LoginComponent, DocumentListComponent], // Import instead of declare
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
