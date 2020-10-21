import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public _HttpClient:HttpClient)
   { 
  
   }
   getTrendingMovies():Observable<any>
   {
     return this._HttpClient.get('https://api.themoviedb.org/3/trending/movie/week?api_key=0ff76cff19210059bbb57ff3fd66c6a5')
   }
   getMoviesdetails(id):Observable<any>
   {
     return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=0ff76cff19210059bbb57ff3fd66c6a5&language=en-US`)
   }

   getTrendingTv():Observable<any>
   {
     return this._HttpClient.get('https://api.themoviedb.org/3/trending/tv/week?api_key=0ff76cff19210059bbb57ff3fd66c6a5')
   }
 

}



