import { Component, OnInit } from '@angular/core';
import { FlickerService } from '../services/flicker.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private flickerService: FlickerService,
    private route: Router,
    private snackBar: MatSnackBar) { }
images;
p=1;
  ngOnInit() {
    this.getImages();
  }

  getImages(){
    this.flickerService.getPhotos().subscribe(res=>{
      if(res['stat'] == 'ok'){
        this.snackBar.open('Loading Images','',{
          duration: 2000,
        });
        this.images = res
      }else{
        this.snackBar.open('Fetching Images Failed','', {
          duration: 2000,
        });
      }
      console.log(res['stat'], 'res')
    })
  }

  clicked(image){
    this.route.navigate(['/rating', image.id])
    this.flickerService.currentImg(image);
  }

}
