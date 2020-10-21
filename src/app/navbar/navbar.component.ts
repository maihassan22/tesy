import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
   
   isLodin:boolean=false;
  constructor(public _AuthService:AuthService)
    {
      
      _AuthService.userData.subscribe(data=>
        {

          console.log(data)
          if(data)
          {
            this.isLodin = true;
            console.log(this.isLodin)
          }
          else
          {
            
            this.isLodin = false;
            
          }

         
          
        })
    }

  

  ngOnInit(): void {
  }

}
