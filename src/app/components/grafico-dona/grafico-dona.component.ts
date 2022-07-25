import { Component, OnInit, Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input() leyenda: string = 'leyenda';
  @Input()doughnutChartType: ChartType = 'doughnut';
  @Input() doughnutChartData: ChartData<ChartType> = {
    datasets: [{ data: [] }]
  };
  

  constructor() {}

  ngOnInit(): void {}
}
