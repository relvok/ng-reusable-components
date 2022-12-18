import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit {
  @Input() data: any = [];
  openedItemIndex: number = 0;
  constructor() {}
  onClick(ind: number) {
    if (ind === this.openedItemIndex) {
      this.openedItemIndex = -1;
    } else {
      this.openedItemIndex = ind;
    }
  }
  ngOnInit(): void {}
}
