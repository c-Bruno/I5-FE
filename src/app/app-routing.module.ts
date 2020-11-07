import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ChartsComponent } from './charts/charts.component';
import { MethodologyComponent } from './methodology/methodology.component';
import { SugestionsComponent } from './sugestions/sugestions.component';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '', component: NavigationComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'methodology', component: MethodologyComponent },
      { path: 'sugestions', component: SugestionsComponent },
      { path: 'about', component: AboutComponent },
    ]
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
