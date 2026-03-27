import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  // include the Ion Card in the imports to use in my home.page.html
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle ],
})
// 
export class HomePage {
  movies:any=[]=[];
  constructor(private service: MovieService) {}

  // lifecyce hook given by ionic, gets called every time the page loads
  ionViewWillEnter() {
    this.service.GetMovieData().subscribe(
    (data)=> {
      this.movies = data.Search; // just get the Search array (array of movie objects)
      console.log(this.movies); // log it in the console just to see it exists in developer tools
     });
  }
}
