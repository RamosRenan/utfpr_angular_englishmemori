import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 import { Observable } from 'rxjs';
 import { WordsInterface } from '../interfaces/words-interface';
import { Words } from '../model/words/words';

@Injectable({
  providedIn: 'root'
})
export class RegistryWordJserverService {

  private dbServUrl:string = "http://localhost:3000/words";

  constructor(private httpClient:HttpClient) { }

  /**
   * gett all resgistries from db.json 
   */ 
  public getAll()
  {
    return this.httpClient.get<Words>(
      this.dbServUrl, 
      {
        observe:'body',
        responseType:'json'
      }
    );

  }// getAll()


  /**
   * inserir registro 
   */
  public insert(data:Words) : Observable<Words>
  {
    return this.httpClient.post<Words>(
      this.dbServUrl, data
    );
  }

  /**
   * update registro 
   */
   public update(data:Words, id:number) : Observable<Words>
   {
     return this.httpClient.put<Words>(
      this.dbServUrl+"/"+id, data
     );
   }

   /**
   * update registro 
   */
    public find(id:number) : Observable<Words>
    {
      return this.httpClient.get<Words>(
        this.dbServUrl+"/"+id
      );
    }

}// class
