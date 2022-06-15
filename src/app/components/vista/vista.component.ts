import { Component, OnInit } from '@angular/core';
import {ProvinciasService} from "../services/provincias.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

  inNombre: string = ""
  constructor(private provinciaService: ProvinciasService, private router: Router) { }

  ngOnInit(): void {
  }

  handleSubmitEvent($event: any) {
    this.provinciaService.searchByNombre(this.inNombre)
  }

  handleAgregarEvent($event: MouseEvent) {
    this.router.navigate(['/','provincia',0]);
  }
}
