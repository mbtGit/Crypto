import { Component } from '@angular/core';
import { socialService } from './social.service'
import { AmChartsService, AmChart } from "../../node_modules/@amcharts/amcharts3-angular";


@Component({
	selector: 'socialComponent',
	providers: [socialService],
	styleUrls:  ["../css/components.css"],
	template: 
		`
		<div class="row currencyRow" *ngFor = "let currency of currencies">
			 <div class="col-md-2 currencyData">
			 	<div class="block">
              		<img class="currencyImg" src="{{currency.img}}" alt="Img">
            	</div>
            	<div>{{currency.name}}</div>
			 </div>
			 <div class="col-md-8"><div id="chartdiv{{currency.name}}" class="amChartSocial"></div></div>
		</div>
		
		`,
})


export class socialComponent {

	private chart: AmChart;
	currencies;
	socialId;

	constructor(socialSrv: socialService, private AmCharts: AmChartsService) {

		this.currencies = socialSrv.getCurrencies();
	}

	ngOnDestroy() {
	    if (this.chart) {
	      this.AmCharts.destroyChart(this.chart);
		}
	}

	ngAfterViewInit() {

		 for (var currency in this.currencies) {
	    	this.chart = this.AmCharts.makeChart("chartdiv" + this.currencies[currency].name, {
				"type": "xy",
				"theme": "none",
				"marginRight": 5,
				"offsetWidth": 10,
				"offsetHeight": 10,
				"autoMargins" : true,
				"hideYScrollbar" : true,
				"dataDateFormat": "YYYY-MM-DD HH:mm",
				"startDuration": 1.5,
				"trendLines": [],
				"balloon": {
					"adjustBorderColor": false,
					"shadowAlpha": 0,
					"fixedPosition":true
				},
				"graphs": [{
				"balloonText": "<div style='margin:5px;'><b>[[x]]</b><br>y:<b>[[y]]</b><br>value:<b>[[value]]</b></div>",
				"bullet": "round",
				"id": "AmGraph-1",
				"lineAlpha": 0,
				"lineColor": "#fcd202",
						"fillAlphas": 0,
						"valueField": "counts",
						"xField": "date",
						"yField": "networkId"
					}],
					"valueAxes": [{
						"id": "ValueAxis-1",
						"axisAlpha": 0
					}, {
						"id": "ValueAxis-2",
						"axisAlpha": 0,
						"position": "bottom",
						"type": "date",
						"minimumDate": new Date(2015, 0, 1),
						"maximumDate": new Date(2015, 0, 7)
					}],
					"allLabels": [],
					"titles": [],
					"dataProvider": [{
						"date": "2015-01-01 12:14",
						"networkId": 1,
						"counts": 10
					}, {
						"date": "2015-01-01 14:39",
						"networkId": 1.3,
						"counts": 8
					}, {
						"date": "2015-01-02 08:39",
						"networkId": 1.3,
						"counts": 4
					}, {
						"date": "2015-01-02 12:39",
						"networkId": 0.8,
						"counts": 13
					}, {
						"date": "2015-01-02 12:03",
						"networkId": 1.5,
						"counts": 2
					}, {
						"date": "2015-01-02 08:10",
						"networkId": 1.1,
						"counts": 17
					}, {
						"date": "2015-01-05 10:00",
						"networkId": 0.7,
						"counts": 10
					}, {
						"date": "2015-01-05 12:42",
						"networkId": 1,
						"counts": 13
					}, {
						"date": "2015-01-05 21:00",
						"networkId": 0.9,
						"counts": 11
					}, {
						"date": "2015-01-05 22:33",
						"networkId": 0.7,
						"counts": 10
					}, {
						"date": "2015-01-05 23:34",
						"networkId": 1.4,
						"counts": 11
					}, {
						"date": "2015-01-06 01:39",
						"networkId": 1.7,
						"counts": 3
					}],

					"export": {
						"enabled": true
					},

					"chartScrollbar": {
						"offset": 15,
						"scrollbarHeight": 5
					},

					"chartCursor":{
					   "pan":true,
					   "cursorAlpha":0,
					   "valueLineAlpha":0
					}
                });
	    }
	}
}