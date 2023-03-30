import { Component, OnInit } from '@angular/core';
import { ScoreboardService } from 'src/app/services/scoreboard.service';

@Component({
  selector: 'app-editable-inning',
  templateUrl: './editable-inning.component.html',
  styleUrls: ['./editable-inning.component.scss']
})
export class EditableInningComponent implements OnInit {

  value: string = '1';
  start: boolean = true;
  key = "Inning"

  constructor(
    private scoreboardService: ScoreboardService,
  ) {
  }

  ngOnInit(): void {
    this.scoreboardService.getData(this.key).subscribe(v => {
      const val = v.split('a')[0].split('c')[0];
      this.value = val
      this.start = v.includes('a')
    });
  }

  addOne() {
    if (!this.start) {
      this.value = "" + (+this.value + 1);
    }
    this.start = !this.start
    var newValue = "" + (this.value + (this.start ? 'a' : 'c'))
    this.scoreboardService.updateData(this.key, newValue)
  }

  subsOne() {
    if (this.start) {
      this.value = "" + (+this.value - 1);
    }
    this.start = !this.start
    var newValue = "" + (this.value + (this.start ? 'a' : 'c'))
    this.scoreboardService.updateData(this.key, newValue)
  }

  clear() {
    this.scoreboardService.updateData(this.key, '1a')
  }
}
