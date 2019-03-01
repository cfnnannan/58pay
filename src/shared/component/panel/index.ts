import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({ selector: 'app-panel', templateUrl: './index.html' })

export class PagePanelComponent
{

  constructor() { }
  @Input() Name: string;
  @Input() Title: string;
  @Input() Opacity: number;
  @Input() BtnTxt: string;
  @Output() BtnEvent = new EventEmitter();
}
