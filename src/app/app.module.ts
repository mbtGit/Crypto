import { BrowserModule } 	from '@angular/platform-browser';
import { NgModule } 		from '@angular/core';
import { AppComponent } 	from './app.component';
import { socialComponent } 	from './social.component';
import { AmChartsModule } 	from "../../node_modules/@amcharts/amcharts3-angular";

@NgModule({
  declarations: [ AppComponent, socialComponent],
  imports: 		[ BrowserModule, AmChartsModule ],
  providers:	[],
  bootstrap: 	[AppComponent]
})
export class AppModule { }
