import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './routing/home.component';
import { JavaComponent } from './routing/java.component';
import { OracleComponent } from './routing/oracle.component';
import { PhpComponent } from './routing/php.component';
import { SpringComponent } from './routing/spring.componet';
import { HibernateComponent } from './routing/hibernate.component';
import { StrutsComponent } from './routing/struts.component';
import { RouterModule} from '@angular/router';
import { routes } from './routing/routing.config';
import { RoutingAuthentication} from './services/routing.authentication'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JavaComponent,
    OracleComponent,
    PhpComponent,
    SpringComponent,
    HibernateComponent,
    StrutsComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [RoutingAuthentication],
  bootstrap: [HomeComponent]
})
export class AppModule { }
