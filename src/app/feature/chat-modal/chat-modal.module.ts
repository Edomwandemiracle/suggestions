import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChatModalComponent } from './chat-modal.component';
import { ChatHeaderComponent } from './component/chat-header/chat-header.component';
import { ChatListComponent } from './component/chat-list/chat-list.component';


export const routes: Routes = [
  { path: 'chat', component: ChatModalComponent },
];

@NgModule({
  declarations: [ChatModalComponent, ChatHeaderComponent, ChatListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
})
export class ChatModule {}