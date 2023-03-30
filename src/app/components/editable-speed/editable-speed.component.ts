import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ScoreboardService } from 'src/app/services/scoreboard.service';

@Component({
  selector: 'app-editable-speed',
  templateUrl: './editable-speed.component.html',
  styleUrls: ['./editable-speed.component.scss']
})
export class EditableSpeedComponent implements OnInit {


  key: string = "SPEED";
  valueToShow: string = '0';
  defaultValue: string = "";

  @ViewChild('value') newValue!: ElementRef;

  constructor(
    private scoreboardService: ScoreboardService,
  ) {
  }

  ngOnInit(): void {
    this.scoreboardService.getData(this.key).subscribe(v => {
      this.valueToShow = v;
    });
  }

  update() {
    this.scoreboardService.updateData(this.key, this.newValue.nativeElement.value);
    this.valueToShow = this.newValue.nativeElement.value;
    this.newValue.nativeElement.value = '';
    setTimeout(() => {
      this.scoreboardService.updateData(this.key, "");
    }, 5000)
  }

}
