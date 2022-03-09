import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Album } from '../album';
import { AlbumServiceService } from '../album-service.service';

@Component({
  selector: 'app-albumlist',
  templateUrl: './albumlist.component.html',
  styleUrls: ['./albumlist.component.css']
})
export class AlbumlistComponent implements OnInit {

  constructor(private titleServie: Title,
    private songServiceService: AlbumServiceService) { }

    public albums: Album[] = [];
    private getAlbum(): void {
      this.songServiceService
        .getAlbum()
        .then(foundAlbum => (this.albums = foundAlbum));
    }
  ngOnInit(): void {
    this.getAlbum();
    this.titleServie.setTitle('Music List');
  }

}

export class AppComponent {
  currentItem = 'Television';

  }