import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YtPlayerComponent } from './yt-player/yt-player.component';
import { ChatComponent } from './chat/chat.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: AppComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'ytplayer', component: YtPlayerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
