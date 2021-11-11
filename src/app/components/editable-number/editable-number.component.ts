import { Component, Input, OnInit } from '@angular/core';
import { ScoreboardService } from 'src/app/services/scoreboard.service';

@Component({
  selector: 'app-editable-number',
  templateUrl: './editable-number.component.html',
  styleUrls: ['./editable-number.component.scss']
})
export class EditableNumberComponent implements OnInit {

  @Input() key: string = "";
  @Input() isEditable: boolean = false;

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
    this.value = "" + (+this.value + 1);
  }

  subsOne() {
    this.scoreboardService.subsOne(this.key);
    this.value = "" + (+this.value - 1);
  }

  clear() {
    this.scoreboardService.clear(this.key);
    this.value = "-";
  }

  setZero() {
    this.scoreboardService.updateData(this.key, '0');
    this.value = "0";
  }
}
