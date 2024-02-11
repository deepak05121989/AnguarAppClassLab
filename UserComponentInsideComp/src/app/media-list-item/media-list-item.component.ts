import { Component ,OnInit} from '@angular/core';
import { MediaItemService } from '../media-item.service';

@Component({
  selector: 'app-media-list-item',
  templateUrl: './media-list-item.component.html',
  styleUrls: ['./media-list-item.component.css']
})
export class MediaListItemComponent implements OnInit {
  mediaItems:any;
constructor(private mediaItemService: MediaItemService) {}
 ngOnInit() {
  this.mediaItems = this.mediaItemService.get();
  }
  onMediaItemDelete(mediaItem:any) {
  this.mediaItemService.delete(mediaItem);
  }
  

}
