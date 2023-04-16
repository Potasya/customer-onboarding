import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonalDetailsComponent} from "./personal-details/personal-details.component";
import {StrategyComponent} from "./strategy/strategy.component";

const routes: Routes = [
  { path: '', redirectTo: '/strategy', pathMatch: 'full' },
  { path: 'next-steps', component: PersonalDetailsComponent },
  { path: 'strategy', component: StrategyComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
