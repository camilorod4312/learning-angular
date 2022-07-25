import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: [],
})
export class IncrementerComponent implements OnInit {

  @ViewChild('txtProgress')
  txtProgress!: ElementRef;

  @Input() progress: number = 50;
  @Input() legend: string = 'Legend';

  @Output() value_change: EventEmitter<number> = new EventEmitter();
  
  constructor() {}

  ngOnInit(): void {}
  
  onChanges( newValue: number){

    if (newValue > 100) newValue = 100
    else if (newValue<0) newValue = 0
    this.progress = newValue

    this.txtProgress.nativeElement.value = this.progress;
    this.value_change.emit(this.progress)
  }
  updateValue(value_to_add: number) {

    this.progress += value_to_add;
    if (this.progress> 100) this.progress = 100;
    else if (this.progress<0) this.progress = 0;

    this.value_change.emit(this.progress);

    this.txtProgress.nativeElement.focus()
  }
}
