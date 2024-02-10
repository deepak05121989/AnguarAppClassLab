import { Component } from '@angular/core';

@Component({
  selector: 'app-media-list-item',
  templateUrl: './media-list-item.component.html',
  styleUrls: ['./media-list-item.component.css']
})
export class MediaListItemComponent {
  mediaItems=
  [
    {
    Id:1,
    name:"TestTestTest Test",
    mediam:"Series",
    category:"Science Fiction",
    year:2023,
    watchOn:"01/27/2022",
    isFavorite:false
  
    },
    {
      Id:1,
      name:"Firbug",
      mediam:"Series",
      category:"Science Fiction",
      year:2023,
      watchOn:"01/27/2022",
      isFavorite:false
    
      },
      {
        Id:1,
        name:"Firbug",
        mediam:"Series",
        category:"Science Fiction",
        year:2023,
        watchOn:"01/27/2022",
        isFavorite:false
      
        },
        {
          Id:1,
          name:"Firbug",
          mediam:"Series",
          category:"Science Fiction",
          year:2023,
          watchOn:"01/27/2022",
          isFavorite:false
        
          }
  ]

}
