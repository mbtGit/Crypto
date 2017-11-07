import { BrowserModule } 				from '@angular/platform-browser';
import { NgModule } 					from '@angular/core';
import { sharedService }           from './shared.service';
import { AppComponent } 				    from './app.component';
import { socialComponent } 				from './social.component';
import { carouselComponent }		 	from './carousel.component';
import { AmChartsModule } 				from "../../node_modules/@amcharts/amcharts3-angular";

@NgModule({
  declarations: 	    [ AppComponent, 
  					            socialComponent, 
  					            carouselComponent ],
  imports: 			      [ BrowserModule, 
  					            AmChartsModule ],
  providers:		      [ sharedService ],
  bootstrap: 		      [ AppComponent]
})
export class AppModule { }
