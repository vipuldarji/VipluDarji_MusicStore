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
  apiUrl = environment.apiBaseUrl;
  song: Song = new Song();

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

  ngOnInit(): void {
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
        (song: any) => {
          console.log('song', song);
          this.song = this.song;
          this.titleServie.setTitle(song.title);
          this.setImageUrl(this.song as Song);
        },
        (error) => {
          this.errorPage = {
            statusText: error.statusText,
            status: error.status,
          };
        }
      );
  }
  private setImageUrl(song: Song): void {
    song.src = song.image
      ? `${this.apiUrl}/images/${song.image}`
      : `/assets/images/notfound.jpg`;
  }

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
