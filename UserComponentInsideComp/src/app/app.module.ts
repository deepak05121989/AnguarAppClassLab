import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaListItemComponent } from './media-list-item/media-list-item.component';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { MediaItemService } from './media-item.service'; 

@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaListItemComponent,
    MediaItemFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    MediaItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
