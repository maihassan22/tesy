import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
 
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  trendingTv=[];
  trendingTvimg="https://image.tmdb.org/t/p/w500";
  constructor(_MoviesService:MoviesService)
   { 
     _MoviesService.getTrendingTv().subscribe( 
       (data)=>{
         this.trendingTv=data.results} , 
       (err)=>{
         console.log(err)} 
       )

   }

  ngOnInit(): void {
  }

}
