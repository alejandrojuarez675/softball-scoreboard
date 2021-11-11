import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { DisplayPageComponent } from './pages/display-page/display-page.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { ScoreboardService } from './services/scoreboard.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    DisplayPageComponent,
    ScoreboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ScoreboardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
