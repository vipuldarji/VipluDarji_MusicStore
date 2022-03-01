import { Component, OnInit, NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SongServiceService } from '../song-service.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Song } from '../song';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { UpdatesongComponent } from '../updatesong/updatesong.component';

@Component({
  selector: 'app-songdetails',
  templateUrl: './songdetails.component.html',
  styleUrls: ['./songdetails.component.css'],

  // providers: [SongServiceService],
})
export class SongdetailsComponent implements OnInit {
  song: Song = new Song();
  public id = '6213f743fd247f5198e0c4ef';
  public store = {};
  public songid = '';
  public artist_name = '';
  public track = '';
  public genre = '';
  public price = '';
  public image = '';
  public description = '';
  public createdOn = '';

  errorPage = {
    statusText: '',
    status: '',
  };
  constructor(
    private titleServie: Title,
    private songService: SongServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public songs: Song[] = [];

  private getSingleSong(): void {
    this.songService
      .getSingleSong('')
      .then((foundSong) => (this.store = foundSong));
  }

  ngOnInit(): void {
    this.getSingleSong();
    this.titleServie.setTitle('Details');

    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          let id = params.get('songid') || '0';
          let result = this.songService.getSingleSong(id);
          return result;
        })
      )
      .subscribe(
        (song: Song) => {
          this.store = song;
          this.songid = song._id;
          this.artist_name = song.artist_name;
          this.track = song.track;
          this.genre = song.genre;
          this.price = song.price;
          this.image = song.image;
          this.description = song.description;
          this.createdOn = song.createdOn;
          return (
            this.songid,
            this.artist_name,
            this.track,
            this.genre,
            this.price,
            this.image,
            this.description,
            this.createdOn,
            this.store
          );
          this.songid = this.song._id;
          console.log(this.song);
        },
        (error) => {
          this.errorPage = {
            statusText: error.statusText,
            status: error.status,
          };
        }
      );
  }

  public async confirmDelete(songId: string) {
    this.songService.deleteSong(songId);

    setTimeout(() => {
      alert('Redirecting you to list page');
      this.router.navigate(['list']);
    }, 1000);
  }

  public async redirectUpdate(songId: string) {
    // console.log(songId);
    this.router.navigate([`/update/${songId}`]);
    
  }
}
