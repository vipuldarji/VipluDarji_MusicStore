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

  public getSingleProduct(songid: String): Promise<void | Song> {
    return this.http
      .get(this.songUrl + '/' + songid)
      .toPromise()
      .then((response) => response as Song)
      .catch(this.handleError1);
  }
  handleError1(handleError1: any): Promise<void | Song> {
    throw new Error('Method not implemented.');
  }

  deleteProduct(songid: String): Promise<void | Song[]> {
    return this.http
      .delete(this.songUrl + '/' + songid)
      .toPromise()
      .then((response) => response as Song[])
      .catch(this.handleError);
  }

  // Delete song

  deleteSong(songId: string) {
    this.http.delete('http://localhost:3000/api/song/' + songId)
     .subscribe(()=>{  
        console.log("Deleted");  
    });  
  }
  // public async deleteSong(id: string) {
  //   let song = await this.getSingleSong(id);
  //   let url: string = '';
  //   if (song.image) {
  //     let url: string = `${this.songUrl}/images/${song.image}`;
  //     console.log(url);
  //     await this.http.delete(url).toPromise();
  //   }
  //   url = `${this.songUrl}/song/${id}`;
  //   try {
  //     return await this.http.delete(url).toPromise();
  //   } catch (error) {
  //     throw await this.handleError(error);
  //   }
  // }

  //For upload of image
  public uploadImage(songdata: object, mime: string): Promise<any> {
    const url: string = `${this.songUrl}/images`;
    return this.http
      .post(url, songdata, {
        headers: new HttpHeaders().set('Content-Type', mime),
      })
      .toPromise()
      .then((response) => {
        return response;
      })
      .catch(this.handleError);
  }

  //For Create Song
  public createSong(songdata: any): Promise<any> {
    const url: string = `${this.songUrl}/song`;
    return this.http
      .post(url, songdata)
      .toPromise()
      .then((response) => {
        return response;
      })
      .catch(this.handleError);
  }

  // Update Song
  public updateSong(id: string, song: any) {
    const url: string = `${this.songUrl}/song/${id}`;
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
