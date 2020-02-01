import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [
  { path: 'users', component: UsersComponent },
  // { path: 'search', component: SearchComponent },
  // { path: 'search/:term', component: SearchComponent },
  // { path: 'hero/:id/:page', component: HeroeComponent },
  // { path: 'hero/:id/:page/:term', component: HeroeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'users' },
  { path: '**', pathMatch: 'full', redirectTo: 'users' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
