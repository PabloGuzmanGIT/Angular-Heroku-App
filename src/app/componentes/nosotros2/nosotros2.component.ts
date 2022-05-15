import { Component, OnInit } from '@angular/core';
import { nosotros2 } from 'src/app/entities/nosotros2';
import { Nosotros2Service } from 'src/app/services/nosotros2.service';

@Component({
  selector: 'app-nosotros2',
  templateUrl: './nosotros2.component.html',
  styleUrls: ['./nosotros2.component.scss']
})
export class Nosotros2Component implements OnInit {
  listaNosotros2: nosotros2[] | undefined;
  constructor(private nostros2Service: Nosotros2Service){}

  ngOnInit(): void {
    this.nostros2Service.nosotros2Select().subscribe(
      (res) =>{
        this.listaNosotros2 = JSON.parse(JSON.stringify(res));
      }
    )
  }

}
