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
import { CreateAlbumComponent } from './create-album/create-album.component';
import { UpdateAlbumComponent } from './update-album/update-album.component';
import { AlbumlistComponent } from './albumlist/albumlist.component';
import { AlbumdetailsComponent } from './albumdetails/albumdetails.component';

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
    CreateAlbumComponent,
    UpdateAlbumComponent,
    AlbumlistComponent,
    AlbumdetailsComponent,
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
        path: 'listAlbum',
        component: AlbumlistComponent,
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
        path: 'createalbum',
        component: CreateAlbumComponent,
      },
      {
        path: 'details/:songid',
        component: SongdetailsComponent,
      },
      {
        path: 'albumdetails/:albumid',
        component: AlbumdetailsComponent,
      },
      {
        path: 'update/:songid',
        component: UpdatesongComponent,
      },
      {
        path: 'updatealbum/:albumid',
        component: UpdateAlbumComponent,
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
