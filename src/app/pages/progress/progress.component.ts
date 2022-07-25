import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [],
})
export class ProgressComponent implements OnInit {
  progress0: number = 0;
  progress1: number = 100;

  constructor() {}

  ngOnInit(): void {}

  
}
