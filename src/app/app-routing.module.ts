import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { DisplayPageComponent } from './pages/display-page/display-page.component';

const routes: Routes = [
  { path: 'admin', component: AdminPageComponent },
  { path: '**', component: DisplayPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
