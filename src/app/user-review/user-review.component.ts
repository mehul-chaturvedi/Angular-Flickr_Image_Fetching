import { Component, OnInit } from '@angular/core';
import { FlickerService } from '../services/flicker.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-review',
  templateUrl: './user-review.component.html',
  styleUrls: ['./user-review.component.css']
})
export class UserReviewComponent implements OnInit {

  constructor(private flickerService: FlickerService,
    private router: Router) {
    this.numbers = Array(10).fill(0).map((x,i)=>i);
   }
image:any;
images;
numbers;
  ngOnInit() {
    this.flickerService.currentImage.subscribe((res)=>{
      this.image = res['image'];
      this.images = res['images'];
    })
  }

  formSubmit(form: NgForm){
    var rating ={
      imageId: this.image.id,
      name: form.value.userName,
      rating: form.value.userRatings,
      reason: form.value.userReason
    }
    this.images.photos.photo.forEach(ele=>{
      if(ele.id === rating['imageId']){
        ele['ratings'].push(rating);
        console.log(ele, 'ele')
      }
    })
    console.log(rating, 'ra')
    this.flickerService.ratingService(this.images);
    this.router.navigate(['/main']);
  }

}
