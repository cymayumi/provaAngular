import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlocksComponent } from './pages/blocks/blocks.component';
import { CardsComponent } from './pages/cards/cards.component';
import { FormsComponent } from './pages/forms/forms.component';
import { HomeComponent } from './pages/home/home.component';
import { PricingComponent } from './pages/pricing/pricing.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'blocks',
    component: BlocksComponent
  },
  {
    path: 'cards',
    component: CardsComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'pricing',
    component: PricingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
