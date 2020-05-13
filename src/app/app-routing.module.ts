import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component'
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'landing',
    loadChildren: () =>
      import("./landing-page/landing-page.module").then((m) => m.LandingPageModule),
    canActivate: [],
  },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: '404', component: PageNotFoundComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
