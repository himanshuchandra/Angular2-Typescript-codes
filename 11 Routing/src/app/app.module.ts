import { AuthService } from './authguard.factory';
import { AuthGuard } from './authguard.service';
import { SportShoeComponent } from './sports.component';
import { ShoeComponent } from './shoe.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from './routing.module';

import { AppComponent } from './app.component';
import {ChildComponent} from './Child Component/child.component';
import {Header} from './Header/header.component';
import {Footer} from './Footer/footer.component';
import {HomeComponent} from './home.component';
import {ErrorPageComponent} from './error-page/error-page.component';



@NgModule({
  declarations: [
    AppComponent,ChildComponent,Header,Footer,HomeComponent,ErrorPageComponent,ShoeComponent,SportShoeComponent
  ],
  imports: [
    BrowserModule,FormsModule,AppRoutingModule
  ],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
