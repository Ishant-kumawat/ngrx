import { Action,createReducer, on } from "@ngrx/store";
import { costumname, customnumber, decrement, increment, reset } from "./counter.action";
import { initialstate } from "./counter.state";

const _counterReducer = createReducer(initialstate,
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1
        };
    }),

    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1
        };
    }),

    on(reset, (state) => {
        return {
            ...state,
            counter: 0
        };
    }),
    
    on(customnumber, (state,action) => {
        return {
            ...state,
            counter: action.action=='Add'?state.counter+action.value:state.counter-action.value
        };
    }),
    on(costumname, (state,action) => {
        return {
            ...state,
            costumname: action.names
            };
    })
)

export function counterReducer(state: any, action: any) {
    return _counterReducer(state, action);
}