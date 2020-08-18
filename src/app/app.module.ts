import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartModule } from 'highcharts-angular';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { SelectorComponent } from './selector/selector.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubHeaderComponent,
    SelectorComponent,
    MainContentComponent,
    AsideComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HighchartsChartModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
