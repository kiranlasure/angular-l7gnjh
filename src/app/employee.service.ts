import { Injectable } from '@angular/core';
import { HttpClient ,HttpResponse} from '@angular/common/http';
import { Groom } from './groom';
import { Observable , throwError} from 'rxjs';


@Injectable()


export class EmployeeService {


  
  private url: string = 'https://api.myjson.com/bins/17rdgk';
  constructor(private http: HttpClient){  }
    
    getgroomsDetails(): Observable<Groom[]>
    {
       return this.http.get<Groom[]>(this.url)
    }
 


    
}
 

