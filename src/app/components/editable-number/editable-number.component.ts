import { Component, Input, OnInit } from '@angular/core';
import { ScoreboardService } from 'src/app/services/scoreboard.service';

@Component({
  selector: 'app-editable-number',
  templateUrl: './editable-number.component.html',
  styleUrls: ['./editable-number.component.scss']
})
export class EditableNumberComponent implements OnInit {

  @Input() key: string = "";
  value: string = '-';

  constructor(
    private scoreboardService: ScoreboardService,
  ) {
  }

  ngOnInit(): void {
    this.scoreboardService.getData(this.key).subscribe(v => this.value = v);
  }

  addOne() {
    this.scoreboardService.addOne(this.key);
  }

  subsOne() {
    this.scoreboardService.subsOne(this.key);
  }

  clear() {
    this.scoreboardService.clear(this.key);
  }
}
