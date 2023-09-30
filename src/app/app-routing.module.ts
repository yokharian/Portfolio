import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoicefluidComponent } from './noicefluid/noicefluid.component';
import { YtPlayerComponent } from './yt-player/yt-player.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: DashboardComponent },
  { path: 'noicefluid', component: NoicefluidComponent },
  { path: 'ytplayer', component: YtPlayerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
