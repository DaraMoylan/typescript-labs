import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}

// use the httpClient to do a get request for the omdb json with the apikey!
  GetMovieData():Observable<any> { 
    return this.httpClient.get('https://www.omdbapi.com/?i=tt3896198&apikey=8cb6c8ed&s=%27war%27');
  }
}
