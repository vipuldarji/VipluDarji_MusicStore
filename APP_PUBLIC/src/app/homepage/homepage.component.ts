import { Component, OnInit } from '@angular/core';
import { Song } from '../song';
import { SongServiceService } from '../song-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [SongServiceService],
})
export class HomepageComponent implements OnInit {
  public songs: Song[] = [];

  constructor(private songService: SongServiceService) {}

  ngOnInit(): void {
    this.songService.getSong().then((songs) => {
      this.songs = songs as Song[];
    });
  }
}
