import { Color } from './../../state/color/color.model'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Observable, of } from 'rxjs'
import { map, switchMap } from 'rxjs/operators'



@Injectable()
export class ColorService {
  private colorUrl = 'api/colors'
  constructor(private httpClient: HttpClient) { }

  getColors(): Observable<Array<Color>> {
    return this.httpClient.get<Color[]>(this.colorUrl)
  }

  getColor(name: string): Observable<Color> {
    return this.getColors().pipe(
      map(colors => colors.find(color => color.name === name))
    )
  }

  save(color: Color): Observable<Color> {
    if (color.name) {
      return this.put(color)
    }
    return this.post(color)
  }

  delete(color: Color): Observable<Color> {
    const url = `${this.colorUrl}/${color.name}`

    return this.httpClient
      .delete<void>(url)
      .pipe(switchMap(() => of(color)))
  }

  private post(color: Color): Observable<Color> {
    return this.httpClient.post<Color>(this.colorUrl, color)
  }


  private put(color: Color): Observable<Color> {
    const url = `${this.colorUrl}/${color.name}`

    return this.httpClient
      .put(url, color)
      .pipe(switchMap(() => of(color)))
  }
}