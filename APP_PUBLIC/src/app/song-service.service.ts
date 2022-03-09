import { Injectable } from '@angular/core';
import { Song } from './song';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SongServiceService {
  private songUrl = 'http://localhost:3000/api/song';
  constructor(private http: HttpClient) {}

  //Get list of song
  public getSong(): Promise<Song[] | any> {
    // const url: string = `${this.songUrl}/song`;

    return (
      this.http
        .get(this.songUrl)
        //.get(url)
        .toPromise()
        .then((response) => response as Song[])
        .catch(this.handleError)
    );
  }

  // For Single song
  public getSingleSong(id: string): Promise<Song | Song> {
    const url: string = `${this.songUrl}/${id}`; // /song/${id}

    return this.http
      .get(url)
      .toPromise()
      .then((response) => response as Song)
      .catch(this.handleError);
  }


  handleError1(handleError1: any): Promise<void | Song> {
    throw new Error('Method not implemented.');
  }

  // Delete song

  deleteSong(songId: string) {
    this.http
      .delete('http://localhost:3000/api/song/' + songId)
      .subscribe(() => {
        console.log('Deleted');
      });
  }

  public createSong(newSong: Song): Promise<void | Song> {
    return this.http
      .post(this.songUrl, newSong)
      .toPromise()
      .then((response) => response as Song)
      .catch(this.handleError1);
  }

  // Update Song
  public updateSongDetail(song: any, id: string) {
    const url: string = `${this.songUrl}/${id}`;
    return this.http
      .put(url, song)
      .toPromise()
      .then((response) => {
        return response;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong.', error);
    return Promise.reject(error);
  }
}
