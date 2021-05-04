import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherMainComponent } from './components/weather-main/weather-main.component';
import { WeatherFutureComponent } from './components/weather-future/weather-future.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherMainComponent,
    WeatherFutureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
