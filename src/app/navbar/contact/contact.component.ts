import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private snack:MatSnackBar){}

ngOnInit(): void {

}

btnClick(){
  console.log("btn click");
  this.snack.open("Mail has been send to Anand..","Cancel")
  
}



}
