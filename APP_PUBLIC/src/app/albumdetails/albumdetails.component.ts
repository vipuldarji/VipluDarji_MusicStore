import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Album } from '../album';
import { AlbumServiceService } from '../album-service.service';

@Component({
  selector: 'app-albumdetails',
  templateUrl: './albumdetails.component.html',
  styleUrls: ['./albumdetails.component.css'],
})
export class AlbumdetailsComponent implements OnInit {
  album: Album = new Album();
  public id = '';
  public store = {};
  public albumid = '';
  public name = '';
  public tracks = '';
  public genre = '';
  public image = '';
  public description = '';
  // public createdOn = '';

  errorPage = {
    statusText: '',
    status: '',
  };
  constructor(
    private titleServie: Title,
    private albumService: AlbumServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public albums: Album[] = [];

  private getSingleAlbum(): void {
    this.albumService
      .getSingleAlbum('')
      .then((foundAlbum) => (this.store = foundAlbum));
  }
  ngOnInit(): void {
    this.getSingleAlbum();
    this.titleServie.setTitle('Details');

    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          let id = params.get('albumid') || '0';
          let result = this.albumService.getSingleAlbum(id);
          return result;
        })
      )
      .subscribe(
        (album: Album) => {
          this.store = album;
          this.albumid = album._id;
          this.name = album.name;
          this.tracks = album.tracks;
          this.genre = album.genre;
          this.description = album.description;
          this.image = album.image;
          // this.createdOn = album.createdOn;
          return (
            this.albumid,
            this.name,
            this.tracks,
            this.genre,
            this.description,
            this.image,
            // this.createdOn,
            this.store
          );
          this.albumid = this.album._id;
          console.log(this.album);
        },
        (error) => {
          this.errorPage = {
            statusText: error.statusText,
            status: error.status,
          };
        }
      );
  }

  public async confirmDelete(albumId: string) {
    this.albumService.deleteAlbum(albumId);

    setTimeout(() => {
      alert('Redirecting you to list page');
      this.router.navigate(['listAlbum']);
    }, 1000);
  }

  public async redirectUpdate(albumId: string) {
    // console.log(albumId);
    this.router.navigate([`/updatealbum/${albumId}`]);
  }
}
