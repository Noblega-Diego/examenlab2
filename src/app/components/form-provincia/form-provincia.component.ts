import { Component, OnInit } from '@angular/core';
import {Provincia} from "../services/Provincia";
import {ProvinciasService} from "../services/provincias.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form-provincia',
  templateUrl: './form-provincia.component.html',
  styleUrls: ['./form-provincia.component.css']
})
export class FormProvinciaComponent implements OnInit {

  provincia!: Provincia;

  constructor(private provinciaService: ProvinciasService,  private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.provincia = {
      id: 0,
      nroDepartamentos: 0,
      superfcie: 0,
      poblacion: 0,
      badera: "",
      capital:"",
      abreviatura:"",
      nombre:""
    }
    this.activatedRoute.params.subscribe(({id})=> {
      console.log(id)
      this.provincia.id = Number(id)
      if (Number(id) !== 0) {
        this.provinciaService.getById(id).then((i) => {
          this.provincia = i
        })
      }
    })
  }

  async handleSubmitEvent($event: any) {
    await this.provinciaService.save(this.provincia)
    await this.router.navigate(['/',''])
  }
}
