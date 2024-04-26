import { createFeatureSelector, createSelector } from "@ngrx/store";
import { countermodel } from "../model/counter.model";
import { state } from "@angular/animations";

const getcountersatate=createFeatureSelector<countermodel>('counter');
export const getcounter=createSelector(getcountersatate,(state)=>{
return state.counter;
}
)

export const getcostumname=createSelector(getcountersatate,(state)=>{
    return state.costumname;
    }
    )

