import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ScoreboardService } from 'src/app/services/scoreboard.service';

@Component({
  selector: 'app-editable-text',
  templateUrl: './editable-text.component.html',
  styleUrls: ['./editable-text.component.scss']
})
export class EditableTextComponent implements OnInit {

  @Input() key: string = "";
  @Input() defaultValue: string = "";
  @Input() isEditable: boolean = false;

  value: string = '';

  @ViewChild('value') newValue!: ElementRef;


  constructor(
    private scoreboardService: ScoreboardService,
  ) {
  }

  ngOnInit(): void {
    this.scoreboardService.getData(this.key).subscribe(v => {
      this.value = v.toUpperCase();
      this.newValue.nativeElement.value = v.toUpperCase();
    });
  }

  update() {
    this.scoreboardService.updateData(this.key, this.newValue.nativeElement.value);
    this.value = this.newValue.nativeElement.value;
    //this.newValue.nativeElement.value = '';
  }

}
