import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'child',
  templateUrl: './child.component.html'
})

export class ChildComponent {

  constructor(private router:Router){

  }
  redirect(): void {

    this.router.navigate(['/']);
    // this.router.navigate(['/shoes',shoes]); here shoes is a parameter
    // path will be /shoes/:shoes

    // this.location.back(); for back
  }

}
