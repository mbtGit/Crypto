import { Component } from '@angular/core';
import { socialService } from './social.service'
import { sharedService } from './shared.service'
import { AmChartsService, AmChart } from "../../node_modules/@amcharts/amcharts3-angular";


@Component({
	selector: 'socialComponent',
	providers: [socialService ],
	styleUrls:  ["../css/components.css"],
	template: 
		`
		<div class="row currencyRow" *ngFor = "let currency of currencies">
			<div class="col-md-3 currencyData">
			 	<div class="row">
			 		<div class="block" class="col-md-3 currencyImg">
              			<img style="float:right; width: 70%" src="{{currency.img}}" alt="Img">
            		</div>
            		<div clas="col-md-9">
            			<div class="row">
            				<div class="col-md-12 currencyName">{{currency.name}}</div>
            			</div>
            			<div class="row">
            				<div class="currencyDetails col-md-6">Volume</div><div class="currencyDetails col-md-6">300</div>
            				<div class="currencyDetails col-md-6">Price</div><div class="currencyDetails col-md-6">300</div>
            			</div>
            		</div>
            	</div>
			</div>
			<div class="col-md-9">
			 	<div id="chartdiv{{currency.name}}" class="amChartSocial"></div>
			</div>
		</div>
		
		`,
})


export class socialComponent {

	currencies;
	allBulletsMap;
	socialId;

	constructor(private socialSrv: socialService,
				private sharedSrv: sharedService,
			    private AmCharts: AmChartsService) {

		this.currencies = socialSrv.getCurrencies();
		this.allBulletsMap = new Map();

		// Run over all currencies
		for (var currency in this.currencies) {
			// Get all aggregate events and map them by id
			for (var aggregateEvent in this.currencies[currency].events) {
				this.allBulletsMap.set(this.currencies[currency].events[aggregateEvent].id,
									   this.currencies[currency].events[aggregateEvent])	
			}
		}
	}

	ngOnDestroy() {
		var allCharts = this.AmCharts.charts;

    	for (var chart in allCharts) {
		    if (allCharts[chart]) {
		      this.AmCharts.destroyChart(allCharts[chart]);
			}
		}
	}

	clickGraphItem(event){
		
		this.sharedSrv.changeAggregatedEvents(this.allBulletsMap.get(event.item.dataContext.id));
	}

	ngAfterViewInit() {

		var chart: AmChart;
		 for (var currency in this.currencies) {
	    	chart = this.AmCharts.makeChart("chartdiv" + this.currencies[currency].name, {
				"type": "xy",
				"theme": "none",
				"marginRight": 5,
				"offsetWidth": 10,
				"offsetHeight": 10,
				"autoMargins" : true,
				"hideYScrollbar" : true,
				"dataDateFormat": "YYYY-MM-DD HH:mm",
				"startDuration": 0.5,
				"trendLines": [],
				"balloon": {
					"adjustBorderColor": false,
					"shadowAlpha": 0,
					"fixedPosition":true
				},
				"graphs": [{
					"balloonText": "<div style='margin:5px;'><b>[[x]]</b><br>Total Messages:<b>[[value]]</b><br>Total Likes:<b>[[totalLikes]]</b></div>",
					"bullet": "round",
					"lineAlpha": 0,
					"lineColor": "#33cccc",
					"fillAlphas": 0,
					"minBulletSize": 30,
				    "maxBulletSize": 100,
					"valueField": "messagesCount",
					"xField": "datetime",
					"yField": "networkId"
				},{
				    "showBalloon": false,
				    "bullet": "custom",
				    "maxBulletSize": 40,
    				"minBulletSize": 20,
				    "customBulletField": "networkIco",
				    "bulletBorderAlpha": 0.2,
				    "bulletAlpha": 0.8,
				    "lineAlpha": 0,
				    "fillAlphas": 0,
				    "valueField": "messagesCount ",
				    "xField": "datetime",
				    "yField": "networkId"
				}],
				"valueAxes": [{
					"id": "ValueAxis-1",
					"axisAlpha": 0
				}, {
					"id": "ValueAxis-2",
					"axisAlpha": 0,
					"position": "bottom",
					"type": "date"
				}],
				"allLabels": [],
				"titles": [],
				"dataProvider": this.currencies[currency].events,

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

            chart.addListener("clickGraphItem", this.clickGraphItem.bind(this));
	    }
	}
}