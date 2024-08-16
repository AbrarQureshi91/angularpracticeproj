import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Full Course ';
  getName(name:any){

    alert("Abrar")
  }
  getData()
  {
    alert('Hy Abrar')
  }
  show=false
  color="red";
  
}
