// Moduels
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './modules/material-module';
import { AppRoutingModule } from './modules/app-routing-module';
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';

// Components
import { App } from './app';
import { HeaderComponent } from './layout/header/header.component';
import { ListComponent } from './components/Student/list/list.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [App, ListComponent, HeaderComponent],
  imports: [BrowserModule, MaterialModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule { } 
