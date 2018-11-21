import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from '../components/banner/banner.component';
import { HomeComponent } from '../components/home/home.component';
import { HistoryOfTempleComponent } from '../components/history-of-temple/history-of-temple.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { PhotoGalleryComponent } from '../components/photo-gallery/photo-gallery.component';
import { DonationsComponent } from '../components/donations/donations.component';
import { LanguageFabComponent } from '../components/language-fab/language-fab.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslatePipe } from '../pipes/translate.pipe';
import { ScheduleComponent } from '../components/schedule/schedule.component';
import { SevasComponent } from '../components/sevas/sevas.component';
import { FestivalsComponent } from '../components/festivals/festivals.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HomeComponent,
    HistoryOfTempleComponent,
    ContactUsComponent,
    PhotoGalleryComponent,
    DonationsComponent,
    LanguageFabComponent,
    TranslatePipe,
    ScheduleComponent,
    SevasComponent,
    FestivalsComponent
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
