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
    console.log(this.chart);
  }

  createChart() {
    this.chart = new Chart(this.canvas, {
      type: 'polarArea',
      data: {
        datasets: [{
          data: this.data,
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
        }],
        labels: this.labels,
      },
      options: {
        legend: {
          display: false,
        },
      }
    });
  }

  updateChart() {
    this.chart.data.labels = this.labels;
    this.chart.data.datasets[0].data = this.data;
    this.chart.update();
  }

}
