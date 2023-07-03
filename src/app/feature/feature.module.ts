import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';
import { ChatModalComponent } from './chat-modal/chat-modal.component';
import { LandingPageComponent } from './landing-page/landing-page.component';



export const appRoutes: Routes = [
  {
    path: '',
    component: FeatureComponent,
    children: [
      { path: '', component: LandingPageComponent},
      { path: 'chat', component: ChatModalComponent },
      {
        path: '/',
        loadChildren: () =>
          import('../../app/feature/landing-page/landing-page.module').then(
            (m) => m.LandingPageModule
          ),
      },
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
    RouterModule.forChild(appRoutes),
  ],
})
export class FeatureModule {}