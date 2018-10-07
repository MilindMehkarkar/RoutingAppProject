import { Routes } from '@angular/router'
import { JavaComponent } from './java.component';
import { OracleComponent } from './oracle.component';
import { PhpComponent } from './php.component';
import { SpringComponent } from './spring.componet';
import { HibernateComponent } from './hibernate.component';
import { StrutsComponent } from './struts.component';

export const routes: Routes = [
    {path: '', component: JavaComponent, 
    children:[
        { path: 'spring', component: SpringComponent},
        { path: 'hibernate', component: HibernateComponent},
        {path: 'struts', component: StrutsComponent}
      ]},
    { path: 'oracle', component: OracleComponent },
    { path: 'php', component: PhpComponent }

];
