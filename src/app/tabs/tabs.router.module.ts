import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ColorsPage } from '../pages/colors/colors.page'
import { ContactPage } from '../pages/contact/contact.page'
import { HomePage } from '../pages/home/home.page'
import { TabsPage } from './tabs.page'

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: 'colors',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomePage,
      },
      {
        path: 'colors',
        component: ColorsPage,
      },
      {
        path: 'contact',
        component: ContactPage,
      },
    ],
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
