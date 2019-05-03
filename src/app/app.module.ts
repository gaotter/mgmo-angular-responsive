import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MgmoResponsiveTableComponent } from './responsive-table/components/responsive-table.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MgmoResponsiveTableComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
