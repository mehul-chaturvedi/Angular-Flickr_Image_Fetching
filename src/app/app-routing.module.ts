import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UserReviewComponent } from './user-review/user-review.component';

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: '' , pathMatch: 'full', redirectTo: 'main'},
  {path: 'rating/:name', component: UserReviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
