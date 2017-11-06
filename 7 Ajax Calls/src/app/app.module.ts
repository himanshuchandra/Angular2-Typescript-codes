import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent} from './Child.Component/child.component';
import {Singleton} from './app.singleton';

import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,ChildComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule
  ],
  providers: [Singleton],
  bootstrap: [AppComponent]
})
export class AppModule {

}
