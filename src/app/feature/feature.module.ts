// import { appRoutesLazyLoad } from './lazy-load.route';
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SharedModule } from 'src/app/shared/shared.module';
import { FeatureComponent } from './feature.component';
import { ChatModalComponent } from './chat-modal/chat-modal.component';



export const appRoutes: Routes = [
    {
      path: '',
      component: FeatureComponent,
      children: [
        { path: 'chat', component: ChatModalComponent },
        {
          path: 'chat',
          loadChildren: () =>
            import('../../app/feature/chat-modal/chat-modal.module').then(
              (m) => m.ChatModule
            ),
        },
      ],
    },
  ];

@NgModule({
  declarations: [FeatureComponent],
  imports: [
    CommonModule,
    // SharedModule,
    RouterModule.forChild(appRoutes),
  ],
})
export class FeatureModule {}