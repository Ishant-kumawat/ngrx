import { createAction, props } from "@ngrx/store";

export const increment = createAction("increment");
export const decrement = createAction("decrement");
export const reset = createAction("reset");
export const customnumber = createAction("customnumber", props<{ value: number , action: string}>());
export const costumname = createAction("costumname", props<{names:string}>());