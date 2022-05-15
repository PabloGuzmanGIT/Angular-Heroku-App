import { Component, OnInit } from '@angular/core';
import { Staf } from 'src/app/entities/staf';
import { StafService } from 'src/app/services/staf.service';

@Component({
  selector: 'app-staf',
  templateUrl: './staf.component.html',
  styleUrls: ['./staf.component.css']
})
export class ChefComponent implements OnInit {
  listaChef: Staf[] | undefined;
  chefFilter: any = { ranking: '' };
  p: number = 1;
  order: string = 'ranking';
  reversa: boolean = false;

  constructor(private stafService: StafService) { }

  ngOnInit(): void {
    this.stafService.stafSelect().subscribe(
      (res) => {
        
        this.listaChef = JSON.parse(JSON.stringify(res));
      }
    )
  }

  setOrder(ranking: string){
    if(this.order === ranking){
      this.reversa = !this.reversa
    }
    this.order = ranking
    console.log(this.order)
  }

}
