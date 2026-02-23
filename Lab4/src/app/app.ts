import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// import my listcomponent
import { Listcomponent } from './listcomponent/listcomponent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Listcomponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // declare and initialise my variables
  count: number = 0;
  starBool: boolean = true;
  

  // function to increase the count variable when the button is clicked
  onClickButton() {
    this.count++;
  }

  // function using the dblclick to hide and reveal the <h2> element
  onDoubleClick() {

    // if the boolean is true make it false, which reveals the <h2> element
    if (this.starBool) {
      this.starBool = false;
    }
    // else make it true, which hides the <h2> element
    else {
      this.starBool = true;
    }

  }
}



