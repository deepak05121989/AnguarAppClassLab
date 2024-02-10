import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
  @Input() mediaItem:any;
  OnDelete()
  {
    console.log("delete event trugger");
  }
}
