import { Component, OnInit } from '@angular/core';
import {EChartsOption} from 'echarts';

@Component({
  selector: 'app-bin-page',
  templateUrl: './bin-page.component.html',
  styleUrls: ['./bin-page.component.css']
})
export class BinPageComponent implements OnInit {

  chartOption: EChartsOption = {
    legend: {
      data: ['ménager', 'recyclé']
    },
    xAxis: {
      type: 'category',
      data: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [14.5, 13.6, 16.8, 14.6, 12.3, 4.7, 2.5],
        type: 'bar',
        color: '#5DADE2',
        name: 'ménager'
      },
      {
        data: [12.3, 6.6, 13.1, 12.2, 10.9, 3.1, 1.9],
        type: 'bar',
        color: '#27AE60',
        name: 'recyclé'
      },
    ],
  };

  constructor() { }

  ngOnInit(): void {
  }


}
