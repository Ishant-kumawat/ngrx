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

  tabs: any[] = [0,5];
  inputValue: number;

  constructor(private store : Store<AppstateModel> ){this.inputValue = this.tabs.length;}
  ngOnInit(): void {
    this.customsubsciption=this.store.select(getcostumname).subscribe(data => {
      this.costumname= data;
      console.log(this.inputValue)
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
