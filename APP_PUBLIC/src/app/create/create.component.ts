import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Song } from '../song';
import { SongServiceService } from '../song-service.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [SongServiceService],
})
export class CreateComponent implements OnInit {
  // newSong: Song = new Song();
  public newSong: Song = {
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

  @Input() song: Song;
  constructor(
    private titleServie: Title,
    private songService: SongServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.titleServie.setTitle('Create');
  }
  public createSong(newSong: Song): void {
    // console.log(Date.now.toString());
    // newSong.createdOn = Date.now.toString();
    this.songService.createSong(newSong);
    setTimeout(() => {
      alert('Redirecting you to list page');
      this.router.navigate(['list']);
    }, 500);
  }
}
