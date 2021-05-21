import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public toggle=false;

public innerWidth: any;


@HostListener('window:resize', ['$event'])
onResize(event) {
  this.innerWidth = window.innerWidth;
  if(this.innerWidth<525){
    this.toggle=true;
  }
  else{
    this.toggle=false;
  }
}


  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar(){
this.toggle=false;

  }

  

}
