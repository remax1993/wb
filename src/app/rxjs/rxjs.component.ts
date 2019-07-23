import { Component, OnInit } from '@angular/core';

import {IObs} from "./iobs";
import {DataService} from "./data.service";


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  arr: Array<Array<Object>> = [];
  sum: number = 0;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
  }

  start(){

      this.dataService.getObserve().subscribe({
          next: ((value: IObs) => {

            if(this.arr[value.stream]){
                this.arr[value.stream].push(value);
            }else{
                this.arr[value.stream] = new Array();
                this.arr[value.stream].push(value);
            }


            this.sum += value.id;
          }),
          complete: () => console.log('complete'),
          error: err => console.log('error ', err)
      });


  }

}
