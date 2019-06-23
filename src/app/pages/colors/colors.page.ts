import { Component, OnInit } from '@angular/core'
import { LoadingController } from '@ionic/angular'
import { HtmlColors } from '../../../constants/html-colors'
import { Color } from '../../state/color/color.model'

@Component({
  selector: 'app-colors',
  templateUrl: 'colors.page.html',
  styleUrls: ['colors.page.scss'],
})
export class ColorsPage implements OnInit {
  colors: Color[]

  constructor(public loadingController: LoadingController) {}

  ngOnInit() {
    this.colors = HtmlColors
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Hellooo',
      duration: 2000,
    })
    return await loading.present()
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: 'hide',
      duration: 5000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
    })
    return await loading.present()
  }
}
