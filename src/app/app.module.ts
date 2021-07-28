import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TodoModule } from '../todo/todo.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [BrowserModule, FormsModule, TodoModule, StoreModule.forRoot({})],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
