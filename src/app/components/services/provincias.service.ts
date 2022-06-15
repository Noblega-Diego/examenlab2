import { Injectable } from '@angular/core';
import {Provincia} from "./Provincia";

@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {

  private URL = "http://168.194.207.98:8081/api_provincia"

  private _provincias:Provincia[] = []

  get provincias(){
    return [...this._provincias]
  }

  constructor() { }

  async update(){
    this._provincias = await (await fetch(this.URL+"/get_provincias.php")).json()
  }

  async getAll(){
    await this.update()
    return this._provincias
  }

  async delete(id:number){
    await fetch(this.URL+"/delete_provincia.php?id="+id)
    await this.update()
  }

  async getById(id:number):Promise<Provincia>{
    let provincia: Provincia = await (await fetch(this.URL+"/get_provincia.php?id="+id)).json()
    return provincia
  }

  async searchByNombre(nombre:string){
    console.log(nombre)
    let provincias: Provincia[] = await (await fetch(this.URL+"/get_provincia.php?nombre="+nombre)).json()
    this._provincias = provincias
  }

  async save(provincia: Provincia):Promise<Provincia>{
    const data = await fetch(this.URL+ (provincia.id === 0)? "/put_provincia.php": "/post_provincia.php",
      {method:provincia.id === 0? "POST":"PUT", body: JSON.stringify(provincia), headers:{'Content-Type': 'application/json'}});
    const updateInstrumento = await data.json()
    await this.update();
    return updateInstrumento;
  }
}
