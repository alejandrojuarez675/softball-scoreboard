import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ScoreboardService } from 'src/app/services/scoreboard.service';

@Component({
  selector: 'app-display-page-v2',
  templateUrl: './display-page-v2.component.html',
  styleUrls: ['./display-page-v2.component.scss']
})
export class DisplayPageV2Component implements OnInit {

  title$: Observable<string>;
  isEditable = false;
  test$: Observable<string>;

  constructor(
    scoreboardService: ScoreboardService,
  ) {
    this.title$ = scoreboardService.getData('title');
    this.test$ = scoreboardService.getData('v1');
  }

  ngOnInit(): void {
  }

}
