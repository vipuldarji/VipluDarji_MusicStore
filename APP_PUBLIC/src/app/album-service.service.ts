import { Injectable } from '@angular/core';
import { Album } from './album';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AlbumServiceService {
  private albumUrl = 'http://localhost:3000/api/album';
  constructor(private http: HttpClient) {}

  //Get list of album
  public getAlbum(): Promise<Album[] | any> {
    return (
      this.http
        .get(this.albumUrl)
        //.get(url)
        .toPromise()
        .then((response) => response as Album[])
        .catch(this.handleError)
    );
  }

  // For Single album
  public getSingleAlbum(id: string): Promise<Album | Album> {
    const url: string = `${this.albumUrl}/${id}`; // /song/${id}

    return this.http
      .get(url)
      .toPromise()
      .then((response) => response as Album)
      .catch(this.handleError);
  }

  public getSingleProduct(albumid: String): Promise<void | Album> {
    return this.http
      .get(this.albumUrl + '/' + albumid)
      .toPromise()
      .then((response) => response as Album)
      .catch(this.handleError1);
  }
  handleError1(handleError1: any): Promise<void | Album> {
    throw new Error('Method not implemented.');
  }

  deleteProduct(albumid: String): Promise<void | Album[]> {
    return this.http
      .delete(this.albumUrl + '/' + albumid)
      .toPromise()
      .then((response) => response as Album[])
      .catch(this.handleError);
  }

  // Delete song

  deleteAlbum(albumId: string) {
    this.http
      .delete('http://localhost:3000/api/album/' + albumId)
      .subscribe(() => {
        console.log('Deleted');
      });
  }

  public createAlbum(newAlbum: Album): Promise<void | Album> {
    return this.http
      .post(this.albumUrl, newAlbum)
      .toPromise()
      .then((response) => response as Album)
      .catch(this.handleError1);
  }

  //For upload of image
  public uploadImage(albumdata: object, mime: string): Promise<any> {
    const url: string = `${this.albumUrl}/images`;
    return this.http
      .post(url, albumdata, {
        headers: new HttpHeaders().set('Content-Type', mime),
      })
      .toPromise()
      .then((response) => {
        return response;
      })
      .catch(this.handleError);
  }
  // Update Song
  public updateAlbumDetail(album: any, id: string) {
    const url: string = `${this.albumUrl}/${id}`;
    return this.http
      .put(url, album)
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
