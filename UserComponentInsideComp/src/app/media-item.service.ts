export class MediaItemService {
        mediaItems =
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
        ];
      
        get() {
          return this.mediaItems;
        }
      
        add(mediaItem:any) {
          this.mediaItems.push(mediaItem);
        }
      
        delete(mediaItem:any) {
          const index = this.mediaItems.indexOf(mediaItem);
          if (index >= 0) {
            this.mediaItems.splice(index, 1);
          }
        }
}
