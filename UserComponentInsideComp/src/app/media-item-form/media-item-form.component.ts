import { Component ,OnInit} from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {
  form:any= FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      medium: new FormControl('Movies'),
      name: new FormControl('', Validators.pattern('[\\w\\-\\s\\/]+')),
      category: new FormControl(''),
      year: new FormControl(''),
    });
  }



  onSubmit(mediaItem:any) {
    console.log(mediaItem);
  }

}