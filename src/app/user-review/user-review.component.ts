import { Component, OnInit } from '@angular/core';
import { FlickerService } from '../services/flicker.service';

@Component({
  selector: 'app-user-review',
  templateUrl: './user-review.component.html',
  styleUrls: ['./user-review.component.css']
})
export class UserReviewComponent implements OnInit {

  constructor(private flickerService: FlickerService) { }
image;
  ngOnInit() {
    this.flickerService.currentImage.subscribe(res=>{
      this.image = res;
      console.log(this.image, 'img')
    })
  }

}
