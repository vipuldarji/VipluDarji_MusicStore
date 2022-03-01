import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Song } from '../song';
import { SongServiceService } from '../song-service.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SongdetailsComponent } from '../songdetails/songdetails.component';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-updatesong',
  templateUrl: './updatesong.component.html',
  styleUrls: ['./updatesong.component.css'],
  providers: [SongServiceService],
})
export class UpdatesongComponent implements OnInit {
  song: Song = new Song();
  public updateSong = {
    _id: '',
    artist_name: '',
    track: '',
    genre: '',
    price: '',
    image: '',
    description: '',
    createdOn: '',
    src: '',
  };
  formData: any;
  @Input() songid: Song[] = [];

  constructor(
    private titleServie: Title,
    private songService: SongServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  errorPage = {
    statusText: '',
    status: '',
  };

  ngOnInit(): void {
    console.log(this.songid);
    this.titleServie.setTitle('Update');
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          let id = params.get('songid') || '0';
          return this.songService.getSingleSong(id);
        })
      )
      .subscribe(
        (song: any) => {
          this.song = song;
          this.updateSong._id = this.song._id;
          this.updateSong.artist_name = this.song.artist_name;
          this.updateSong.track = this.song.track;
          this.updateSong.genre = this.song.genre;
          this.updateSong.price = this.song.price;
          this.updateSong.image = this.song.image;
          this.updateSong.description = this.song.description;
        },
        (error) => {
          this.errorPage = {
            statusText: error.statusText,
            status: error.status,
          };
        }
      );
  }
  public updateSongDetail(updateSong: Song, _id: string): void {
    // console.log(Date.now.toString());
    // newSong.createdOn = Date.now.toString();
    this.songService.updateSongDetail(updateSong, this.updateSong._id);
    setTimeout(() => {
      alert('Redirecting you to list page');
      this.router.navigate(['list']);
    }, 500);
  }
}
