// Moduels
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './modules/material-module';
import { AppRoutingModule } from './modules/app-routing-module';
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';

// Components
import { App } from './app';
import { HeaderComponent } from './layout/header/header.component';
import { ListComponent } from './components/Student/list/list.component';

@NgModule({
  declarations: [App, ListComponent, HeaderComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule { } 
