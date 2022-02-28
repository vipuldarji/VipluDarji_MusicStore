import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SongServiceService } from '../song-service.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Song } from '../song';

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
    console.log(this.store);
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
          this.songid = song._id;
          this.artist_name = song.artist_name;
          this.track = song.track;
          this.genre = song.genre;
          this.price = song.price;
          this.image = song.image;
          this.description = song.description;
          this.createdOn = song.createdOn;
          console.log('song', song);
          return (
            this.songid,
            this.artist_name,
            this.track,
            this.genre,
            this.price,
            this.image,
            this.description,
            this.createdOn
          );
          this.songid = this.song._id;
          console.log(this.song);
          // this.titleServie.setTitle(song.title);
          //this.setImageUrl(this.song as Song);
        },
        (error) => {
          this.errorPage = {
            statusText: error.statusText,
            status: error.status,
          };
        }
      );
  }

  // private getSingleSong(id: string): void {
  //   this.songService
  //     .getSingleSong(id)
  //     .then((foundSong) => (this.song = foundSong));
  // }

  // private setImageUrl(song: Song): void {
  //   song.src = song.image
  //     ? `${this.apiUrl}/images/${song.image}`
  //     : `/assets/images/notfound.jpg`;
  // }

  public async confirmDelete() {
    if (confirm('Are you sure to delete this book?')) {
      await this.songService.deleteSong(this.song._id);
      this.router.navigate(['/list'], {
        state: { display: 'Song Deleted', class: 'alert-danger' },
      });
    }
  }

  public updateDetails() {
    this.router.navigate([`/update/${this.song._id}`]);
  }
}
