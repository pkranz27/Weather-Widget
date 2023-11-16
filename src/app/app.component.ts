import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dynamic-weather-app';

  cities
   = ["London","Paris","Tokoyo","New Orleans", "Slidell","New Haven","Cairo"]
  
  cityControl!: FormControl;

  
  constructor(private router: Router) {}

  ngOnInit(){
    this.cityControl = new FormControl("");
    this.cityControl.valueChanges.subscribe((value)=>{
      this.router.navigate([value]);
    })
  }
  
}
