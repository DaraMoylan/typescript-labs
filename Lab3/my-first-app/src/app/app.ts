import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// import my components A and B 
import { A } from './a/a';
import { B } from './b/b';

// Include them in the import array so that they can be used
@Component({
  selector: 'root-directive',
  imports: [RouterOutlet, A, B],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected readonly title = signal('my-first-app');
  name: string = "Dara";
  age: number = 24;
}
