import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent} from './Child.Component/child.component';
import {Singleton} from './app.singleton';

import {HttpModule} from '@angular/http';
import {CustomPipe} from './custom.pipe';

@NgModule({
  declarations: [
    AppComponent,ChildComponent,CustomPipe
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule
  ],
  providers: [Singleton],
  bootstrap: [AppComponent]
})
export class AppModule {

}
