import { Component, OnInit } from '@angular/core';
import {EChartsOption} from 'echarts';

@Component({
  selector: 'app-bin-page',
  templateUrl: './bin-page.component.html',
  styleUrls: ['./bin-page.component.css']
})
export class BinPageComponent implements OnInit {

  xAxisData = [];
  data1 = [];
  data2 = [];

  chartOption: EChartsOption = {
    legend: {
      data: ['ménager', 'recyclé']
    },
    xAxis: {
      type: 'category',
      data: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
    },
    yAxis: {
      name: 'Kg',
      type: 'value',
    },
    series: [
      {
        data: [14.5, 13.6, 16.8, 14.6, 12.3, 4.7, 2.5],
        type: 'line',
        color: '#5DADE2',
        name: 'ménager',
        smooth: true
      },
      {
        data: [12.3, 6.6, 13.1, 12.2, 10.9, 3.1, 1.9],
        type: 'line',
        color: '#27AE60',
        name: 'recyclé',
        smooth: true
      },
    ],
  };


  chartOptionYear = {
    legend: {
      data: ['ménager', 'recyclé']
    },
    tooltip: {},
    xAxis: {
      data: this.xAxisData,
      splitLine: {
        show: false
      }
    },
    yAxis: {
      name: 'Kg',
    },
    series: [{
      name: 'ménager',
      type: 'bar',
      color: '#5DADE2',
      data: this.data1,
      emphasis: {
        focus: 'series'
      },
      animationDelay: function (idx) {
        return idx * 10;
      }
    }, {
      name: 'recyclé',
      type: 'bar',
      color: '#27AE60',
      data: this.data2,
      emphasis: {
        focus: 'series'
      },
      animationDelay: function (idx) {
        return idx * 10 + 100;
      }
    }],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx) {
      return idx * 5;
    }
  };
  constructor() { }

  ngOnInit(): void {
    for (var i = 100; i > 30; i--) {
      // this.xAxisData.push(new Date().getDay());
      this.data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      this.data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }
  }


}
