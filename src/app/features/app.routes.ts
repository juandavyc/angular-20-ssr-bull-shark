import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ToursPageComponent } from './pages/tours-page/tours-page.component';

const featuresRouter: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children:[
      {
        path:'',
        component: HomePageComponent,
      },
      {
        path:'tours',
        component: ToursPageComponent,
      }
    ]
  }
];

export default featuresRouter;
