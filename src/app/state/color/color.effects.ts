import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import { Observable, of } from 'rxjs'
import { catchError, map, switchMap } from 'rxjs/operators'
import { ColorService } from '../../core/services/color.service'
import * as ColorActions from './color.actions'
import { Color } from './color.model'

@Injectable()
export class ColorEffects {
  @Effect()
  getAllColors$: Observable<Action> = this.actions$.pipe(
    ofType(ColorActions.GET_ALL_COLORS),
    switchMap(() =>
      this.colorService.getColors().pipe(
        map((colors: Color[]) => new ColorActions.GetAllColorsSuccess(colors)),
        catchError(err => of(new ColorActions.GetAllColorsFail(err))),
      ),
    ),
  )

  @Effect()
  getColorByName: Observable<Action> = this.actions$.pipe(
    ofType(ColorActions.GET_COLOR),
    map((action: ColorActions.GetColor) => action.payload),
    switchMap(name =>
      this.colorService.getColor(name).pipe(
        map((color: Color) => new ColorActions.GetColorSuccess(color)),
        catchError(err => of(new ColorActions.GetColorFail(err))),
      ),
    ),
  )

  constructor(private actions$: Actions, private colorService: ColorService) {}
}
