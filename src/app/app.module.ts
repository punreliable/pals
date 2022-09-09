import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteNavbarComponent } from './site-navbar/site-navbar.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SinglePalComponent } from './single-pal/single-pal.component';
import { ReferralLinkComponent } from './referral-link/referral-link.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteNavbarComponent,
    SiteFooterComponent,
    SidebarComponent,
    SinglePalComponent,
    ReferralLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
