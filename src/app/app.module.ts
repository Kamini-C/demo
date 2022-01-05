import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './layout/footer/footer.component';
import { WelcomeBannerComponent } from './mainContent/welcome-banner/welcome-banner.component';
import { ServicesComponent } from './mainContent/services/services.component';
import { TestimonialComponent } from './mainContent/testimonial/testimonial.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AboutComponent } from './about/about.component';
import { AboutIntroComponent } from './about/about-intro/about-intro.component';
import { AboutWidgetComponent } from './about/about-widget/about-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeBannerComponent,
    ServicesComponent,
    TestimonialComponent,
    ErrorpageComponent,
    MainContentComponent,
    AboutComponent,
    AboutIntroComponent,
    AboutWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
