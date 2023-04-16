import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ScoreboardService } from 'src/app/services/scoreboard.service';

@Component({
  selector: 'app-display-mini-page',
  templateUrl: './display-mini-page.component.html',
  styleUrls: ['./display-mini-page.component.scss']
})
export class DisplayMiniPageComponent implements OnInit {

  isEditable = false;

  title$: Observable<string>;
  test$: Observable<string>;
  balls$: Observable<string>;
  strikes$: Observable<string>;
  outs$: Observable<string>;
  localRuns$: Observable<string>;
  visitanteRuns$: Observable<string>;
  localName$: Observable<string>;
  visitanteName$: Observable<string>;
  inning$: Observable<string>;
  startInning$: Observable<boolean>;
  speed$: Observable<string>;
  mobile: boolean = false;

  constructor(
    scoreboardService: ScoreboardService,
  ) {
    this.title$ = scoreboardService.getData('title');
    this.test$ = scoreboardService.getData('v1');
    this.balls$ = scoreboardService.getData('Ball');
    this.strikes$ = scoreboardService.getData('Strike');
    this.outs$ = scoreboardService.getData('Out');
    this.localRuns$ = scoreboardService.getData('LR');
    this.visitanteRuns$ = scoreboardService.getData('VR');
    this.localName$ = scoreboardService.getData('L_NAME').pipe( map(v => v?.toUpperCase() || ""));
    this.visitanteName$ = scoreboardService.getData('V_NAME').pipe( map(v => v?.toUpperCase() || ""));
    this.startInning$ = scoreboardService.getData('Inning').pipe(
      map( v => v.includes('a'))
    );
    this.inning$ = scoreboardService.getData('Inning').pipe(
      map( v => v.split('a')[0].split('c')[0])
    );
    this.speed$ = scoreboardService.getData('SPEED');
  }

  ngOnInit(): void {
    if (window.screen.width < 600) { // 768px portrait
      this.mobile = true;
    }
  }
}
