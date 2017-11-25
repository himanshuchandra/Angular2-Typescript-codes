import { AuthGuard } from './authguard.service';
import { SportShoeComponent } from './sports.component';
import { ShoeComponent } from './shoe.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChildComponent } from './Child Component/child.component';
import { HomeComponent } from './home.component';
import { ErrorPageComponent } from './error-page/error-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'child',
    component: ChildComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'shoes/:price/:brand',
    component: ShoeComponent,
    children:[{
      path:'sports',
      component: SportShoeComponent
    }]
  },
  {
    path: '**',
    component: ErrorPageComponent,
    data: {message: 'Page not found!'}
  },
  {
    path: 'redirect',
    redirectTo: 'child',
    pathMatch: 'full'
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
