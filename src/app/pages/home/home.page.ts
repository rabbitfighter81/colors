import { LoadingController } from '@ionic/angular'
import { Color } from './../../state/color/color.model'
import { Observable } from 'rxjs'
import { Component, OnInit } from '@angular/core'

import { Store, select } from '@ngrx/store'
import { AppState } from '../../state/app.reducer'

import * as fromStore from '../../state/app.reducer'
import * as fromColor from '../../state/color/color.actions'
import { getAllColors, getLoading, getError } from '../../state/color'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  colors$: Observable<Array<Color>>
  loading$: Observable<boolean>
  error$: Observable<string>

  constructor(
    private store: Store<fromStore.AppState>,
    public loadingController: LoadingController
  ) {
    this.colors$ = this.store.pipe(select(getAllColors))
    this.loading$ = this.store.pipe(select(getLoading))
    this.error$ = this.store.pipe(select(getError))
  }

  ngOnInit() {
    this.store.dispatch(new fromColor.GetAllColors())
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Hello There :)',
      duration: 2000
    })
    return await loading.present()
  }

}
