import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen: boolean = false;
  items: any = [
    { title: 'Why is the sky blue?', content: 'Because it is.' },
    { title: 'Why is the grass green?', content: 'Because it is.' },
  ];
  constructor() {}

  ngOnInit(): void {}
  onClick(): void {
    this.modalOpen = !this.modalOpen;
    //prvent event bubbling
  }
}
