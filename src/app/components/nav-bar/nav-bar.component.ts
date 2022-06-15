import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  visible:boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  handleClickToggler(e:Event){
    this.visible = !(this.visible)
  }
}
