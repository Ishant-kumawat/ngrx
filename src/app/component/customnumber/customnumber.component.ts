import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { countermodel } from 'src/app/shared/model/counter.model';
import { AppstateModel } from 'src/app/shared/store/Global/Appstate.model';
import { customnumber } from 'src/app/shared/store/counter.action';
import { getcostumname } from 'src/app/shared/store/counter.selector';



@Component({
  selector: 'app-customnumber',
  templateUrl: './customnumber.component.html',
  styleUrl: './customnumber.component.css'
})
export class CustomnumberComponent implements OnInit {
  constructor(private store : Store<AppstateModel>){}
  ngOnInit(): void {
    this.customsubsciption=this.store.select(getcostumname).subscribe(data => {
      this.costumname= data;
     })
  }

  costumname='';
  customsubsciption!: Subscription;

  counterInput!: number;
  actiontype='';
  customnumber(){{
    this.store.dispatch(customnumber({value: +this.counterInput,action: this.actiontype}))
  }


}}
