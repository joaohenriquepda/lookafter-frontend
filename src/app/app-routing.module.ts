import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component'
import { ToolbarComponent } from './toolbar/toolbar.component'


const routes: Routes = [
  {
    path: 'landing',
    loadChildren: () =>
      import("./landing-page/landing-page.module").then((m) => m.LandingPageModule),
    canActivate: [],
  },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: '404', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
