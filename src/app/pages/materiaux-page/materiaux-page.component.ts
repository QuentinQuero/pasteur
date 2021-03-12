import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materiaux-page',
  templateUrl: './materiaux-page.component.html',
  styleUrls: ['./materiaux-page.component.css']
})
export class MateriauxPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  optionMateriaux = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // Use axis to trigger tooltip
        type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    legend: {
      data: ['Plastiques', 'Bois', 'Metal']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      name: 'Kg',
    },
    yAxis: {
      type: 'category',
      data: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Fev', 'Mar']
    },
    series: [
      // {
      //   name: 'Direct',
      //   type: 'bar',
      //   stack: 'total',
      //   label: {
      //     show: true
      //   },
      //   emphasis: {
      //     focus: 'series'
      //   },
      //   data: [320, 302, 301, 334, 390, 330, 320]
      // },
      // {
      //   name: '',
      //   type: 'bar',
      //   stack: 'total',
      //   label: {
      //     show: true
      //   },
      //   emphasis: {
      //     focus: 'series'
      //   },
      //   data: [120, 132, 101, 134, 90, 230, 210]
      // },
      {
        name: 'Plastiques',
        type: 'bar',
        stack: 'total',
        color: '#F4D03F',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [12, 24, 15, 21, 15, 16, 14]
      },
      {
        name: 'Bois',
        type: 'bar',
        stack: 'total',
        color: '#E67E22',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [42, 36, 38, 39, 41, 32, 34]
      },
      {
        name: 'Metal',
        type: 'bar',
        stack: 'total',
        color: '#BFC9CA',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [31, 36, 25, 24, 21, 34, 31]
      }
    ]
  };

  option = {
    tooltip: {},
    legend: {
      data: ['Dons', 'Réemploi']
    },
    radar: {
      // shape: 'circle',
      name: {
        textStyle: {
          color: '#fff',
          backgroundColor: '#999',
          borderRadius: 3,
          padding: [3, 5]
        }
      },
      indicator: [
        { name: 'Bois'},
        { name: 'Metal'},
        { name: 'Plastiques'},
        { name: 'Meubles'},
        { name: 'Peintures'},
        { name: 'Autres'}
      ]
    },
    series: [{
      name: 'Don et réemploi',
      type: 'radar',
      // areaStyle: {normal: {}},
      data: [
        {
          value: [50, 23, 34, 35, 40, 40],
          name: 'Dons'
        },
        {
          value: [54, 35, 24, 30, 28, 27],
          name: 'Réemploi'
        }
      ]
    }]
  };
}
