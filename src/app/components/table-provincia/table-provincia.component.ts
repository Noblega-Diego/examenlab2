import { Component, OnInit } from '@angular/core';
import {ProvinciasService} from "../services/provincias.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-table-provincia',
  templateUrl: './table-provincia.component.html',
  styleUrls: ['./table-provincia.component.css']
})
export class TableProvinciaComponent implements OnInit {
  get provincias(){
    return this.provinciasService.provincias
  }

  constructor(private provinciasService: ProvinciasService, private router: Router) { }

  ngOnInit(): void {
    this.provinciasService.update()
  }

  handleDetalleClick($event: MouseEvent, id:number) {
    this.router.navigate(['/','provincia',id])
  }

  handleModificarClick($event: MouseEvent, id: number) {
    this.router.navigate(['/','form',id])
  }
}
