import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { ScoreboardService } from 'src/app/services/scoreboard.service';

@Component({
  selector: 'app-display-page-v2',
  templateUrl: './display-page-v2.component.html',
  styleUrls: ['./display-page-v2.component.scss']
})
export class DisplayPageV2Component implements OnInit {

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
  }

}
