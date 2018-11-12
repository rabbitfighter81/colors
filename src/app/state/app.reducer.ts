import { ActionReducerMap, MetaReducer } from '@ngrx/store'

import * as fromColor from './color/color.reducer'

export interface AppState {
    colors: fromColor.State
}
export const appReducer: ActionReducerMap<AppState> = {
    colors: fromColor.reducer
}
