import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ScoreboardService } from 'src/app/services/scoreboard.service';

@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.component.html',
  styleUrls: ['./display-page.component.scss']
})
export class DisplayPageComponent implements OnInit {

  title$: Observable<string>;

  constructor(
    private scoreboardService: ScoreboardService,
  ) {
    this.title$ = scoreboardService.getData('title');
  }

  ngOnInit(): void {
  }

}
