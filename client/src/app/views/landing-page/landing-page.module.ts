import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingFooterComponent } from './landing-footer/landing-footer.component';
import { LandingNavHeaderComponent } from './landing-nav-header/landing-nav-header.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ],
  declarations: [
    LandingNavHeaderComponent,
    LandingFooterComponent,
    ContactUsComponent,
    AboutUsComponent,
    ServicesComponent
  ],
  exports: [LandingNavHeaderComponent, LandingFooterComponent]
})
export class LandingPageModule { }
