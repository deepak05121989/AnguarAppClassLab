import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UserComponentInsideComp';
  firstMediaItem={
  Id:1,
	name:"Firbug",
	mediam:"Series",
	category:"Science Fiction",
	year:2023,
	watchOn:"01/27/2022",
  isFavorite:false

  }
}
