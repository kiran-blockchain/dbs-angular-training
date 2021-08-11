import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { ContactindexComponent } from './contactindex/contactindex.component';
import { ContactRoutingModule } from './contact.routing';
import { PhoneComponent } from './phone/phone.component';
import { EmailComponent } from './email/email.component';
import { ChatComponent } from './chat/chat.component';



@NgModule({
  declarations: [
    EnquiryComponent,
    HelpdeskComponent,
    ContactindexComponent,
    PhoneComponent,
    EmailComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
