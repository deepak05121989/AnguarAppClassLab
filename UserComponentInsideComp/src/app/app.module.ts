import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaListItemComponent } from './media-list-item/media-list-item.component';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
//import { MediaItemService } from './media-item.service'; 
import { lookupListToken ,lookupLists } from './provider';
import { HttpClientModule,HttpXhrBackend } from '@angular/common/http';
import { MockXHRBackend } from './mock-xhr-backend';


@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaListItemComponent,
    MediaItemFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    //MediaItemService
    // { provide: 'lookupListToken', useValue: lookupLists }
    { provide: lookupListToken, useValue: lookupLists },
    { provide: HttpXhrBackend, useClass: MockXHRBackend }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
