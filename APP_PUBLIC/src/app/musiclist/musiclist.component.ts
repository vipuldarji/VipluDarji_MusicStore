import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SongServiceService } from '../song-service.service';
import { Song } from '../song';


@Component({
  selector: 'app-musiclist',
  templateUrl: './musiclist.component.html',
  styleUrls: ['./musiclist.component.css'],
})
export class MusiclistComponent implements OnInit {
  constructor(
    private titleServie: Title,
    private songServiceService: SongServiceService
  ) {}
  public songs: Song[] = [];

  private getSong(): void {
    this.songServiceService
      .getSong()
      .then(foundSong => (this.songs = foundSong));
  }

  ngOnInit(): void {
    this.getSong();
    this.titleServie.setTitle('Music List');
  }
}

export class AppComponent {
  currentItem = 'Television';

  }
