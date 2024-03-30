import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostItemComponent } from './post-item/post-item.component';
import { ListingViewComponent } from './listing-view/listing-view.component';
import { PaginationControlComponent } from './pagination-control/pagination-control.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PostItemComponent,
    ListingViewComponent,
    PaginationControlComponent,
    LoadingIndicatorComponent,
    ErrorMessageComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
