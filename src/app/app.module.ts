import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { DisplayPageComponent } from './pages/display-page/display-page.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { ScoreboardService } from './services/scoreboard.service';
import { EditableNumberComponent } from './components/editable-number/editable-number.component';
import { EditableTextComponent } from './components/editable-text/editable-text.component';
import { EditableDiamondComponent } from './components/editable-diamond/editable-diamond.component';
import { AdFooterComponent } from './components/ad-footer/ad-footer.component';
import { EditableTitleComponent } from './components/editable-title/editable-title.component';
import { DisplayPageV2Component } from './pages/display-page-v2/display-page-v2.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    DisplayPageComponent,
    ScoreboardComponent,
    EditableNumberComponent,
    EditableTextComponent,
    EditableDiamondComponent,
    AdFooterComponent,
    EditableTitleComponent,
    DisplayPageV2Component
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
