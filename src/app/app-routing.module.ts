import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImagesComponentComponent }   from '../app/images-component/images-component.component';
import { InfoComponentComponent }      from '../app/info-component/info-component.component';
import { LandingComponentComponent }   from '../app/landing-component/landing-component.component';
import { ProfileComponentComponent }      from '../app/profile-component/profile-component.component';
import { ArticleComponentComponent }      from '../app/article-component/article-component.component';

const routes: Routes = [
  { path: '', redirectTo: '/Landing', pathMatch: 'full' },
  { path: 'Landing', component: LandingComponentComponent },
  { path: 'Profile', component: ProfileComponentComponent },
  { path: 'Article', component: ArticleComponentComponent },
  { path: 'Info', component: InfoComponentComponent },
  { path: 'Images', component: ImagesComponentComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}