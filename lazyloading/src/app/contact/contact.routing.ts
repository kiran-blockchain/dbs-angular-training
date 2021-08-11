import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ContactindexComponent } from './contactindex/contactindex.component';
import { EmailComponent } from './email/email.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { PhoneComponent } from './phone/phone.component';




const routes: Routes = [
    {
        path: '', component: ContactindexComponent,
        children: [
            {
            path: "enquiry", component: EnquiryComponent,
            children: [{
                path: "phone", component: PhoneComponent
            },
            { path: "email", component: EmailComponent },
            { path: "chat", component: ChatComponent }
            ]
        },
        {
            path: 'helpdesk', component: HelpdeskComponent
        }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactRoutingModule { }