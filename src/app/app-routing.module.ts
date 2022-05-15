import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Menu1Component } from './componentes/menu1/menu1.component';
import { Nosotros2Component } from './componentes/nosotros2/nosotros2.component';
import { ChefComponent} from './componentes/staf/staf.component';
import { InicioComponent } from './home/inicio/inicio.component';

const routes: Routes = [
  {path:'',component: InicioComponent},
  {path:'nosotros2',component: Nosotros2Component},
  {path:'staf',component: ChefComponent},
  {path:'menu1',component: Menu1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
