import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditosComponent} from './creditos/creditos.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'creditos',
    component: CreditosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
