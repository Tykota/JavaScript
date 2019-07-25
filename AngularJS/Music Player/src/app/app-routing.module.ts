import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MusicModule} from './music.module';

const routes: Routes = [
  {path: 'music', component: MusicModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
