import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { MonthsComponent } from './components/months.component';
import { GroupsComponent } from './components/groups.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthsComponent,
    GroupsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
