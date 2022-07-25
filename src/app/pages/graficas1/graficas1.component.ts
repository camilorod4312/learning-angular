import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {
  graficos: any = {
    grafico1: {
      data: {
        labels: ['Con Frijoles', 'Con Natilla', 'Con tocino'],
        datasets: [
          {
            data: [23, 30, 46]
          }
        ]
      },
      type: 'doughnut',
      leyenda: 'El pan se come con'
    },
    grafico2: {
      data: {
        labels: ['Hombres', 'Mujeres'],
        datasets: [
          {
            data: [4500, 6000]
          }
        ]
      },
      type: 'pie',
      leyenda: 'Entrevistados'
    },
    grafico3: {
      data: {
        labels: ['Si', 'No'],
        datasets: [
          {
            data: [95, 5]
          }
        ]
      },
      type: 'doughnut',
      leyenda: '¿Le dan gases los frijoles?'
    },
    grafico4: {
      data: {
        labels: ['No', 'Si'],
        datasets: [
          {
            data: [85, 15]
          }
        ]
      },
      type: 'doughnut',
      leyenda: '¿Le importa que le den gases?'
    }
  };

  constructor() {}

  ngOnInit(): void {}
}
