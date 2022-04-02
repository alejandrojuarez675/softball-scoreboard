import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editable-title',
  templateUrl: './editable-title.component.html',
  styleUrls: ['./editable-title.component.scss']
})
export class EditableTitleComponent implements OnInit {

  @Input() isEditable: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
