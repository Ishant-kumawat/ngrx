import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { countermodel } from 'src/app/shared/model/counter.model';
import { getcounter } from 'src/app/shared/store/counter.selector';

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.css']
})
export class CounterdisplayComponent implements OnInit, OnDestroy {
  constructor(private store: Store<{ counter: countermodel }>) { }


  ngOnDestroy(): void {
    if (this.customsubsciption
    ) { this.customsubsciption.unsubscribe(); }
  }

  contervalue!: number;
  costumname = '';
  customsubsciption!: Subscription;
  counter$!: Observable<countermodel>;


  ngOnInit(): void {
    this.customsubsciption=this.store.select(getcounter).subscribe(data => {
     this.contervalue = data;

    })

   // this.counter$ = this.store.select('counter')
  }

}
