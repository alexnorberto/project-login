import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

   
    const splash = document.querySelector('.splash');
    
    setTimeout(()=>{
      console.log("splash 1");
      splash.classList.add('display-none');
      //this.router.navigate(['/login']);
    }, 2000);

  }

  

}
