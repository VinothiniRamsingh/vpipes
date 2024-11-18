import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PipesService {
//async pipe
//ashtasakha data :
  getUser(): Observable<any> {

    return of(['Arjun', 'Krishna', 'Vishal', 'Sabal', 'Rishabh', 'Bhoj', 'Tok', 'Shridama'])
}

}

