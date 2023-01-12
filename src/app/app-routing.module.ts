import { EditorContainerComponent } from './editor-container/editor-container.component';
import { AppComponent } from './app.component';
import { BizaySiteReplicaComponent } from './bizay-site-replica/bizay-site-replica.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path:'',
  component:EditorContainerComponent
},
{
  path:'demo',
  component:BizaySiteReplicaComponent
},
{ path: "chili", component: EditorContainerComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
