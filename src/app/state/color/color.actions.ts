import { Action } from '@ngrx/store'
import { Color } from './color.model'

export const GET_ALL_COLORS = '[COLOR] Get All Colors'
export const GET_ALL_COLORS_SUCCESS = '[COLOR] Get All Colors Success'
export const GET_ALL_COLORS_FAIL = '[COLOR] Get All Colors Fail'

export const GET_COLOR = '[COLOR] Get Color'
export const GET_COLOR_SUCCESS = '[COLOR] Get Color Success'
export const GET_COLOR_FAIL = '[COLOR] Get Color Fail'

// Get Colors List
export class GetAllColors implements Action {
  readonly type = GET_ALL_COLORS
}

export class GetAllColorsSuccess implements Action {
  readonly type = GET_ALL_COLORS_SUCCESS
  constructor(public payload: Color[]) { }
}

export class GetAllColorsFail implements Action {
  readonly type = GET_ALL_COLORS_FAIL
  constructor(public payload: any) { }
}

//Get colors by name
export class GetColor implements Action {
  readonly type = GET_COLOR
  constructor(public payload: string) { }
}

export class GetColorSuccess implements Action {
  readonly type = GET_COLOR_SUCCESS
  constructor(public payload: Color) { }
}

export class GetColorFail implements Action {
  readonly type = GET_COLOR_FAIL
  constructor(public payload: any) { }
}

export type TodoActions =
  GetAllColors
  | GetAllColorsSuccess
  | GetAllColorsFail
  | GetColor
  | GetColorSuccess
  | GetColorFail