import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';



@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  

   
  // @Output () addDetails = new EventEmitter(); 
  @Input() parentData;
  
  constructor() { }

  ngOnInit() {
    
  }
  addDetail()
  {

  }

}