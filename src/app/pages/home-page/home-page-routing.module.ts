import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';

<<<<<<< HEAD

=======
>>>>>>> d66d5cc4dd032976e76a9806ea3722019bf7e4bf
const routes: Routes = [{
  path: '', component: HomePageComponent,
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
