import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MrktService {

  constructor(private http:HttpClient) { }

  getGLData(param: string){ 

    return this.http.get(`http://citihackathon-citihackathon.namdevops31.conygre.com/accounts/${param}`)
  }

  getIndicesData(){ 
    return this.http.get(`http://citihackathon-citihackathon.namdevops31.conygre.com/accounts/indices`)
  }

  getPNWData(param : string){
    return this.http.get(`http://citihackathon-citihackathon.namdevops31.conygre.com/accounts/past/${param}`)
  }

  getCNWData(){
    return this.http.get(`http://citihackathon-citihackathon.namdevops31.conygre.com/accounts/value`)
  }

  getAccData(param : string){
    return this.http.get(`http://citihackathon-citihackathon.namdevops31.conygre.com/accounts/${param}`)
  }
}
