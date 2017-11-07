import { Component , ChangeDetectorRef, Input} from '@angular/core';
import { Type } from '@angular/core';
import { sharedService } from './shared.service'

@Component({
	selector: 'carouselComponent',
	styleUrls:  ["../css/reset.css", 
	             "../css/carousel.css"],
	templateUrl: './carousel.component.html'
})

export class carouselComponent {

	@Input() aggregatedEvents;
	@Input() currentQuoteIndex = 0;

	constructor(private sharedSrv: sharedService, private cdRef:ChangeDetectorRef) { 
		this.aggregatedEvents = {messages: [{ message: "", publisher: ""}]};
	}
	
	ngOnInit() {
		
		this.sharedSrv.currentAggregatedEvents.subscribe(aggregatedEvents => {
			this.aggregatedEvents = aggregatedEvents;
			this.currentQuoteIndex = 0;
			this.cdRef.detectChanges();
		});
	}

	changeIndex(nStep: number) {
		this.currentQuoteIndex = (this.currentQuoteIndex + this.aggregatedEvents.messages.length - nStep) % this.aggregatedEvents.messages.length;
	};
}


