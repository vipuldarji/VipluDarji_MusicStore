import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Album } from '../album';
import { AlbumServiceService } from '../album-service.service';

@Component({
  selector: 'app-update-album',
  templateUrl: './update-album.component.html',
  styleUrls: ['./update-album.component.css'],
  providers: [AlbumServiceService],
})
export class UpdateAlbumComponent implements OnInit {
  album: Album = new Album();
  public updateAlbum = {
    _id: '',
    name: '',
    tracks: '',
    genre: '',
    image: '',
    description: '',
    createdOn: '',
  };
  formData: any;
  @Input() albumid: Album[] = [];
  errorPage: { statusText: any; status: any };

  constructor(
    private titleServie: Title,
    private albumService: AlbumServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.albumid);
    this.titleServie.setTitle('Update');
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          let id = params.get('albumid') || '0';
          return this.albumService.getSingleAlbum(id);
        })
      )
      .subscribe(
        (album: any) => {
          this.album = album;
          this.updateAlbum._id = this.album._id;
          this.updateAlbum.name = this.album.name;
          this.updateAlbum.tracks = this.album.tracks;
          this.updateAlbum.genre = this.album.genre;
          this.updateAlbum.image = this.album.image;
          this.updateAlbum.description = this.album.description;
        },
        (error) => {
          this.errorPage = {
            statusText: error.statusText,
            status: error.status,
          };
        }
      );
  }
  public updateAlbumDetail(updateSong: Album, _id: string): void {
    this.albumService.updateAlbumDetail(this.updateAlbum, this.updateAlbum._id);
    setTimeout(() => {
      alert('Redirecting you to list page');
      this.router.navigate(['listAlbum']);
    }, 500);
  }
}
