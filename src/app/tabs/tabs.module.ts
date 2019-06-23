import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'
import { ColorsPageModule } from '../pages/colors/colors.module'
import { ContactPageModule } from '../pages/contact/contact.module'
import { HomePageModule } from '../pages/home/home.module'
import { TabsPage } from './tabs.page'
import { TabsPageRoutingModule } from './tabs.router.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    ColorsPageModule,
    ContactPageModule,
  ],
  declarations: [TabsPage],
})
export class TabsPageModule {}
