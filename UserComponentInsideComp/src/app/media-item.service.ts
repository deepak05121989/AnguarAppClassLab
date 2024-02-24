import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';
import { map,catchError  } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MediaItemService {
  constructor(private http: HttpClient) {} 
        // mediaItems =
        // [
        //   {
        //   Id:1,
        //   name:"TestTestTest Test",
        //   medium:"Series",
        //   category:"Science Fiction",
        //   year:2023,
        //   watchOn:"01/27/2022",
        //   isFavorite:false
        
        //   },
        //   {
        //     Id:1,
        //     name:"Firbug",
        //     medium:"Series",
        //     category:"Science Fiction",
        //     year:2023,
        //     watchOn:"01/27/2022",
        //     isFavorite:false
          
        //     },
        //     {
        //       Id:1,
        //       name:"Firbug",
        //       medium:"Series",
        //       category:"Science Fiction",
        //       year:2023,
        //       watchOn:"01/27/2022",
        //       isFavorite:false
            
        //       },
        //       {
        //         Id:1,
        //         name:"Firbug",
        //         medium:"Series",
        //         category:"Science Fiction",
        //         year:2023,
        //         watchOn:"01/27/2022",
        //         isFavorite:false
              
        //         }
        // ];
      
        get(medium:string) {
          const getOptions = {
            params: { medium }
          };
          return this.http.get<MediaItemsResponse>('mediaitems', getOptions)
            .pipe(
              map((response: MediaItemsResponse) => {
                return response.mediaItems;
              }),
              catchError(this.handleError)
            );
        }
    
      
        add(mediaItem: MediaItem) {
          return this.http.post('mediaitems', mediaItem)
          .pipe(
            catchError(this.handleError)
          );
    ;
        }
      
        delete(mediaItem: MediaItem) {
          return this.http.delete(`mediaitems/${mediaItem.id}`)
          .pipe(
            catchError(this.handleError)
          );
    ;
        }
        private handleError(error: HttpErrorResponse) {
          console.error(error.message);
          return throwError(()=>error);
        }
      
        
}
interface MediaItemsResponse {
  mediaItems: MediaItem[];
}

export interface MediaItem {
  id: number;
  name: string;
  medium: string;
  category: string;
  year: number;
  watchedOn: number;
  isFavorite: boolean;
}
