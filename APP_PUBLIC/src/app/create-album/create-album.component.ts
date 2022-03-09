import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Album } from '../album';
import { AlbumServiceService } from '../album-service.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createAlbum',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css'],
  providers: [AlbumServiceService],
})
export class CreateAlbumComponent implements OnInit {
  public newAlbum: Album = {
    _id: '',
    name: '',
    tracks: '',
    genre: '',
    image: '',
    description: '',
    createdOn: '',
  };
  formData: any;

  @Input() album: Album;
  constructor(
    private titleServie: Title,
    private albumService: AlbumServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.titleServie.setTitle('CreateAlbum');
  }
  public createAlbum(newAlbum: Album): void {
    this.albumService.createAlbum(newAlbum);
    setTimeout(() => {
      alert('Redirecting you to list page');
      this.router.navigate(['listAlbum']);
    }, 500);
  }
}
