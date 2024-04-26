import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { countermodel } from 'src/app/shared/model/counter.model';
import { decrement, increment, reset ,costumname} from 'src/app/shared/store/counter.action';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.css']
})
export class CounterbuttonComponent {
constructor (private store:Store<{counter:countermodel}>){

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
Rename(){
  this.store.dispatch(costumname({names:'ngrx'}));

}
}
