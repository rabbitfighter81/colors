import * as fromColor from './color.actions'
import { Color } from './color.model'

export interface State {
  colors: Color[],
  loading: boolean
  error: string
}

export const initialState: State = {
  colors: [],
  loading: false,
  error: ''
}

export function reducer(state = initialState, action: fromColor.TodoActions): State {
  switch (action.type) {

    case fromColor.GET_ALL_COLORS: {
      return {
        ...state,
        loading: true
      }
    }

    case fromColor.GET_ALL_COLORS_SUCCESS: {
      return {
        ...state,
        loading: false,
        colors: action.payload
      }
    }

    case fromColor.GET_ALL_COLORS_FAIL: {
      return {
        ...state,
        loading: false,
        error: 'error loading todos'
      }
    }

    case fromColor.GET_COLOR: {
      return {
        ...state,
        loading: true
      }
    }

    case fromColor.GET_COLOR_SUCCESS: {
      return {
        ...state,
        loading: false
      }
    }

    case fromColor.GET_COLOR_FAIL: {
      return {
        ...state,
        loading: false,
        error: 'error loading todo'
      }
    }

    default: {
      return state
    }
  }
}

export const getAllColors = (state: State) => state.colors
export const getLoading = (state: State) => state.loading
export const getError = (state: State) => state.error