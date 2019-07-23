import { Injectable } from '@angular/core';
import {map, skipUntil, takeUntil} from "rxjs/operators";
import {merge, Observable, timer} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  observe4: Observable<Object>;

  constructor() {
      let i = 0;
      const streamify = (stream) => {
          const idx = i++;
          return stream.pipe(map(v => ({id: v, stream: idx})))
      };

      const observe1 = streamify(timer(0,1000));
      const observe2 = streamify(timer(0,1500));
      const observe3 = streamify(timer(0,2000));

      this.observe4 = merge(
          observe1,
          observe2.pipe(skipUntil(timer(10000))),
          observe3.pipe(skipUntil(timer(20000)))
      ).pipe(takeUntil(timer(30000)));
  }

  getObserve(){
    return this.observe4;
  }
}
