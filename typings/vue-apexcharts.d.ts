import Vue, { Component } from 'vue';
import { PluginFunction } from 'vue/types/plugin';
import ApexCharts, { ApexOptions } from 'apexcharts';

interface VueApexChartsComponent extends Vue {
  // data
  readonly chart?: ApexCharts;
  // props
  options?: ApexOptions;
  type?: 'line' | 'area' | 'bar' | 'histogram' | 'pie' | 'donut' | 'radialBar' | 'scatter' | 'bubble' | 'heatmap' | 'candlestick' | 'radar';
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  width?: string | number;
  height?: string | number;
  // method
  init(): void;
  refresh(): void;
  destroy(): void;
  updateOptions(options: any, redrawPaths?: boolean, animate?: boolean): void;
  updateSeries(newSeries: ApexAxisChartSeries | ApexNonAxisChartSeries, animate: boolean): void;
  toggleSeries(seriesName: string): void;
  appendData(newData: any): void;
  addText(options: any, pushToMemory?: boolean, context?: any): void;
  addXaxisAnnotation(options: any, pushToMemory?: boolean, context?: any): void;
  addYaxisAnnotation(options: any, pushToMemory?: boolean, context?: any): void;
  addPointAnnotation(options: any, pushToMemory?: boolean, context?: any): void;
  clearAnnotations(): void;
  dataURI(): Promise<string>;
}

declare const VueApexCharts: Component<VueApexChartsComponent> & PluginFunction<VueApexChartsComponent>;

export default VueApexCharts;

declare module 'vue/types/vue' {
  interface Vue {
    $apexcharts: typeof ApexCharts;
  }
}
