import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-charts-polar',
  templateUrl: './charts-polar.component.html',
  styleUrls: ['./charts-polar.component.scss']
})
export class ChartsPolarComponent implements OnChanges, AfterViewInit {

  @ViewChild('chart') chartRef: ElementRef;

  @Input() data: number[] = [];
  @Input() labels: string[] = [];

  canvas: HTMLCanvasElement;
  chart: Chart;

  ngAfterViewInit() {
    this.canvas = this.chartRef.nativeElement;
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.chart && this.updateChart();
  }

  createChart() {
    this.chart = new Chart(this.canvas, {
      type: 'polarArea',
      data: {
        datasets: [{
          data: this.data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)',
            'rgba(255, 159, 64, 0.7)'
          ],
        }],
        labels: this.labels,
      },
      options: {
        legend: {
          // display: false,
          labels: {
            fontSize: 10,
            padding: 20,
            fontColor: '#dedede'
          },
          position: 'bottom',
        },
        scale: {
          ticks: {
            fontSize: 13,
            backdropColor: 'transparent',
            fontColor: '#dedede',
            beginAtZero: true
          }
        }
      }
    });
  }

  updateChart() {
    this.chart.data.labels = this.labels;
    this.chart.data.datasets[0].data = this.data;
    this.chart.update();
  }

}
