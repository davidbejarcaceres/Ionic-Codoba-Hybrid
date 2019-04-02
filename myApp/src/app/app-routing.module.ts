import { Tab2PageModule } from './tab2/tab2.module';
import { Tab2Page } from './tab2/tab2.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'repo-details', loadChildren: './repo-details/repo-details.module#RepoDetailsPageModule' },
  { path: 'datail', loadChildren: './datail/datail.module#DatailPageModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
