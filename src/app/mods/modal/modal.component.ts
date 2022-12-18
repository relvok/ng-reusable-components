import {
  Component,
  OnInit,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  title: string = 'Modal Title';
  @Output() close: EventEmitter<any> = new EventEmitter();
  onCloseClick() {
    this.close.emit();
  }
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }
  ngOnDestroy(): void {
    this.el.nativeElement.remove();
  }
}
