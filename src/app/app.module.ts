import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MgmoResponsiveTableComponent } from './responsive-table/responsive-table.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, MgmoResponsiveTableComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
