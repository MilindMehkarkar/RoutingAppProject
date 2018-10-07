import { Component } from '@angular/core'

@Component({
    template:`<h1 style="color:blue">
    This is Java Component</h1>
    <ul class="nav">
    <li class="nav-item">
      <a class="nav-link" [routerLink]="['/spring']">Spring</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" [routerLink]="['/hibernate']">Hibernate</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" [routerLink]="['/struts']">Struts</a>
    </li>
  </ul>
<router-outlet></router-outlet>`

})

export class JavaComponent{

}