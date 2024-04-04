import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from 'src/app/shared/store/counter.action';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.css']
})
export class CounterbuttonComponent {
constructor (private store:Store<{counter:{counter:number}}>){

}
  Increment(){
this.store.dispatch(increment());
  }
Decrement(){
  this.store.dispatch(decrement());

}
Reset(){
  this.store.dispatch(reset());

}
}
