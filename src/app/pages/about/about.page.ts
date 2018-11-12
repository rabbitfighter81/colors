import { Color } from './../../state/color/color.model'

import { Component, OnInit } from '@angular/core'
import { HtmlColors } from '../../../constants/html-colors'

import { LoadingController } from '@ionic/angular'

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage implements OnInit {

  colors: Color[]

  constructor(public loadingController: LoadingController) {

  }

  ngOnInit() {
    this.colors = HtmlColors
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Hellooo',
      duration: 2000
    })
    return await loading.present()
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: 'hide',
      duration: 5000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    })
    return await loading.present()
  }

}
