import { Component, Input, OnInit } from '@angular/core';
import { ScoreboardService } from 'src/app/services/scoreboard.service';

@Component({
  selector: 'app-editable-diamond',
  templateUrl: './editable-diamond.component.html',
  styleUrls: ['./editable-diamond.component.scss']
})
export class EditableDiamondComponent implements OnInit {

  @Input() isEditable: boolean = false;

  base1 = false;
  base2 = false;
  base3 = false;
  base4 = false;
  atBat = "";

  constructor(
    private scoreboardService: ScoreboardService,
  ) { }

  ngOnInit(): void {
    this.scoreboardService.getData('b1').subscribe(v => this.base1 = v === 'true');
    this.scoreboardService.getData('b2').subscribe(v => this.base2 = v === 'true');
    this.scoreboardService.getData('b3').subscribe(v => this.base3 = v === 'true');
    this.scoreboardService.getData('BATTER').subscribe(v => this.atBat = v);
  }

  onClick(base: number) {
    console.log('click on ' + base)
    if (!this.isEditable) { return; }
    this.scoreboardService.changeBooleanValue('b'+base);
    switch(base) {
      case 1: this.base1 = !this.base1; break;
      case 2: this.base2 = !this.base2; break;
      case 3: this.base3 = !this.base3; break;
      case 4: this.base4 = !this.base4; break;
    }
  }

}
