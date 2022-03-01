import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { MusiclistComponent } from './musiclist/musiclist.component';
import { CreateComponent } from './create/create.component';
import { SongdetailsComponent } from './songdetails/songdetails.component';
import { DisplayComponent } from './display/display.component';
import { UpdatesongComponent } from './updatesong/updatesong.component';
import { HeaderComponent } from './header/header.component';
import { FrameworkComponent } from './framework/framework.component';

@NgModule({
  declarations: [
    HomepageComponent,
    AboutComponent,
    MusiclistComponent,
    CreateComponent,
    SongdetailsComponent,
    DisplayComponent,
    UpdatesongComponent,
    HeaderComponent,
    FrameworkComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomepageComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'list',
        component: MusiclistComponent,
      },
      {
        path: 'display',
        component: DisplayComponent,
      },
      {
        path: 'create',
        component: CreateComponent,
      },
      {
        path: 'details/:songid',
        component: SongdetailsComponent,
      },
      {
        path: 'update/:songid',
        component: UpdatesongComponent,
      },
      {
        path: 'delete/:songid',
        component: MusiclistComponent,
      },
    ]),
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [FrameworkComponent],
})
export class AppModule {}
