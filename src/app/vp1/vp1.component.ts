import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesService } from '../pipes.service';
import { Observable } from 'rxjs';
import { Pipe1Pipe } from '../pipe1.pipe';


@Component({
  selector: 'app-vp1',
  standalone: true,
  imports: [CommonModule, Pipe1Pipe],
  templateUrl: './vp1.component.html',
  styleUrl: './vp1.component.scss'
})
export class Vp1Component {
day = Date.now();
num = 12245673;
num1 = 0.92346;

ashtasakhi =  [
    {
      "name": "Lalita",
      "village": "Uchagaon"
    },
    {
      "name": "Vishakha",
      "village": "Kamai"
    },
    {
      "name": "Chitra",
      "village": "Chiksauli"
    },
    {
      "name": "Champakalata",
      "village": "Karhala"
    },
    {
      "name": "Tungavidya",
      "village": "Dabhala"
    },
    {
      "name": "Indulekha",
      "village": "Anjanoka"
    },
    {
      "name": "Rangadevi",
      "village": "Rakholi"
    },
    {
      "name": "Sudevi",
      "village": "Sunhera"
    }
  ]

  ashtasakhis =  ['Lalita', 'Vishakha', 'Chitra', 'Champakalata', 'Tungavidya','Indulekha', 'Rangadevi', 'Sudevi'];


  //async pipe
  ashtasakha!: Observable<any>
  constructor(private ser: PipesService){
    this.ashtasakha = this.ser.getUser();
    console.log(this.ashtasakha)
  }

  ngOnInit(): void {

    this.ashtasakha.subscribe(data=> {
    
    console.log(data)
    })
}

}
