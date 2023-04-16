import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { PersonalDetailsService } from "./personal-details/personal-details.service";
import { StrategyComponent } from './strategy/strategy.component';
import { DesktopNavigationComponent } from './desktop-navigation/desktop-navigation.component';
import { MobileNavigationComponent } from './mobile-navigation/mobile-navigation.component';
import { NavigationWrapperComponent } from './navigation-wrapper/navigation-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    StrategyComponent,
    DesktopNavigationComponent,
    MobileNavigationComponent,
    NavigationWrapperComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [PersonalDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
