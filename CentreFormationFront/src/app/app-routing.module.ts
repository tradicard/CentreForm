import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ConnectionComponent } from './EnsConnection/connection/connection.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'Connection',component:ConnectionComponent},
  {path:'searchformation/:ch',component:SearchComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
