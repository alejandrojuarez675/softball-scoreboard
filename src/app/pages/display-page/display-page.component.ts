import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ScoreboardService } from 'src/app/services/scoreboard.service';

@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.component.html',
  styleUrls: ['./display-page.component.scss']
})
export class DisplayPageComponent implements OnInit {

  constructor(
    private scoreboardService: ScoreboardService,
  ) {
  }

  ngOnInit(): void {
  }

}
