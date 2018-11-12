import { createSelector, createFeatureSelector } from '@ngrx/store'
import * as fromColors from './color.reducer'
import { State as ColorsState } from './color.reducer'

export const getColorsState = createFeatureSelector<ColorsState>('colors')

export const getAllColors = createSelector(
  getColorsState,
  fromColors.getAllColors
)

export const getLoading = createSelector(
  getColorsState,
  fromColors.getLoading
)

export const getError = createSelector(
  getColorsState,
  fromColors.getError
)