import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlickerService } from './services/flicker.service';
import { HeaderComponent } from './header/header.component';
import { UserReviewComponent } from './user-review/user-review.component';
import { MainComponent } from './main/main.component';
import {MatToolbarModule, 
  MatCardModule, 
  MatGridListModule, 
  MatTooltipModule, 
  MatSnackBarModule, 
  MatInputModule, 
  MatSelectModule,
  MatButtonModule,
  MatDividerModule} from '@angular/material';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserReviewComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    NgxPaginationModule,
    MatGridListModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    MatDividerModule
  ],
  providers: [FlickerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
