import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  API_URL:string="http://35.180.58.28:8080/messages";
  successMessage="Message sent successfully, I will contact you in a short period of time";
  errorMessage="Failed to send a message";
  messageResponseTitle=""
  showMsg:boolean=false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  sendEmailMessage(email:string,message:string){
    
    this.http.post(this.API_URL, {
      email,
      message
    }).pipe(
      catchError((error) => {
        this.messageResponseTitle = this.errorMessage;
        this.showMessage()
        return []; 
      })
    ).subscribe((x) => {
      this.showMessage()
      this.messageResponseTitle = this.successMessage;
    });

  }

  showMessage(){
    this.showMsg=true;
    setTimeout(()=>{
      this.showMsg=false;
    },5000)
  }

}
