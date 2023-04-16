import { Component, OnInit } from '@angular/core';
import { ScoreboardComponent } from 'src/app/components/scoreboard/scoreboard.component';
import { ScoreboardService } from 'src/app/services/scoreboard.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  isDisplay = false;
  isDisplayMini = false;

  constructor(
    private scoreboardService: ScoreboardService,
  ) { }

  ngOnInit(): void {
  }

}
