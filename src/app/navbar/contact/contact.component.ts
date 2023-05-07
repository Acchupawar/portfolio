import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  name = 'Full Name';
  email = 'Email Address';
  mobile = 'Mobile Number';
  subject = 'Email Subject';
}
