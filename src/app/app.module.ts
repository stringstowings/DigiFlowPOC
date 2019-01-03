import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponentComponent } from './landing-component/landing-component.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { ArticleComponentComponent } from './article-component/article-component.component';
import { InfoComponentComponent } from './info-component/info-component.component';
import { ImagesComponentComponent } from './images-component/images-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponentComponent,
    ProfileComponentComponent,
    ArticleComponentComponent,
    InfoComponentComponent,
    ImagesComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
