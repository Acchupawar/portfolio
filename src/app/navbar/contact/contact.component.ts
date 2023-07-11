import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  constructor(private snack: MatSnackBar, private http: HttpClient) { }

  ngOnInit(): void {
    this.createform();
  }

  public save(portfolio: any) {
    console.log(portfolio);

    return this.http.post("http://localhost:9090/save", portfolio);
  }


  public contactDetails: any;

  public createform() {

    this.contactDetails = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      mobile: new FormControl(''),
      subject: new FormControl(''),
      message: new FormControl('')

    });
  }

  public submiteForm() {
    this.save(this.contactDetails.value).subscribe();


  }






  // this for angular material function
  btnClick() {
    console.log("btn click");
    this.snack.open("Mail has been send to Anand..", "Cancel")

  }



}
