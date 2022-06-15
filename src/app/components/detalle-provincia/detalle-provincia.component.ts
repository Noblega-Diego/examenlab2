import { Component, OnInit } from '@angular/core';
import {Provincia} from "../services/Provincia";
import {ActivatedRoute} from "@angular/router";
import {ProvinciasService} from "../services/provincias.service";

@Component({
  selector: 'app-detalle-provincia',
  templateUrl: './detalle-provincia.component.html',
  styleUrls: ['./detalle-provincia.component.css']
})
export class DetalleProvinciaComponent implements OnInit {

  provincia!: Provincia

  constructor(private proviciaService: ProvinciasService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      this.proviciaService.getById(Number(id)).then((p)=>{
        this.provincia = p
      })
    })
  }

}
